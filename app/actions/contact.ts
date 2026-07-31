"use server";

import {
  BUDGETS,
  PROJECT_TYPES,
  initialContactState,
  type ContactFormState,
} from "../lib/contact";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Deliberately loose: international formats vary and a rejected real number
// costs more than a malformed one landing in the inbox.
const PHONE_PATTERN = /^[+(]?[\d][\d\s()+.-]{5,24}$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function readField(formData: FormData, key: string) {
  const raw = formData.get(key);
  return typeof raw === "string" ? raw.trim() : "";
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const values = {
    name: readField(formData, "name"),
    email: readField(formData, "email"),
    phone: readField(formData, "phone"),
    projectType: readField(formData, "projectType"),
    budget: readField(formData, "budget"),
    message: readField(formData, "message"),
  };

  // Bots fill every field they find. Real people never see this one.
  if (readField(formData, "company")) {
    return { ...initialContactState, status: "success", message: "Thanks — your message is on its way." };
  }

  const errors: ContactFormState["errors"] = {};

  if (values.name.length < 2 || values.name.length > 100) {
    errors.name = "Please enter your name.";
  }
  if (!EMAIL_PATTERN.test(values.email) || values.email.length > 200) {
    errors.email = "Please enter a valid email address.";
  }
  // Optional: only validated when the visitor actually fills it in.
  if (values.phone && !PHONE_PATTERN.test(values.phone)) {
    errors.phone = "Please enter a valid phone number, or leave this blank.";
  }
  if (values.message.length < 10) {
    errors.message = "Please add a little more detail — 10 characters minimum.";
  } else if (values.message.length > 5000) {
    errors.message = "That message is too long. Please keep it under 5,000 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "", errors, values };
  }

  // Selects are attacker-controlled like any other field: fall back rather than trust.
  const projectType = (PROJECT_TYPES as readonly string[]).includes(values.projectType)
    ? values.projectType
    : "Other";
  const budget = (BUDGETS as readonly string[]).includes(values.budget)
    ? values.budget
    : "Not sure yet";

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    // Name the missing variables so a misconfigured deploy is diagnosable from
    // the logs. Never log the values themselves.
    const missing = [
      !apiKey && "RESEND_API_KEY",
      !to && "CONTACT_TO_EMAIL",
      !from && "CONTACT_FROM_EMAIL",
    ].filter(Boolean);
    console.error(`[contact] Missing environment variable(s): ${missing.join(", ")}`);
    return {
      status: "error",
      message: "The form is temporarily unavailable. Please reach out on WhatsApp or by email instead.",
      errors: {},
      values,
    };
  }

  const rows: [string, string][] = [
    ["Name", values.name],
    ["Email", values.email],
    ...(values.phone ? ([["WhatsApp", values.phone]] as [string, string][]) : []),
    ["Project type", projectType],
    ["Budget", budget],
  ];

  // Only link to wa.me when the number is unambiguously international. A local
  // number like "08105715588" has no country code, and guessing one would
  // produce a link to a stranger's WhatsApp rather than the prospect's.
  const whatsappDigits = values.phone.trim().startsWith("+")
    ? values.phone.replace(/\D/g, "")
    : "";

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;line-height:1.6;color:#18181b">
      <h2 style="margin:0 0 16px">New project inquiry</h2>
      <table cellpadding="0" cellspacing="0" style="margin-bottom:20px">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="padding:4px 16px 4px 0;color:#71717a">${label}</td><td style="padding:4px 0"><strong>${escapeHtml(
                value
              )}</strong></td></tr>`
          )
          .join("")}
      </table>
      ${
        whatsappDigits
          ? `<p style="margin:0 0 20px"><a href="https://wa.me/${whatsappDigits}" style="display:inline-block;padding:10px 20px;background:#10b981;color:#ffffff;border-radius:999px;font-weight:600">Reply on WhatsApp</a></p>`
          : ""
      }
      <p style="margin:0 0 8px;color:#71717a">Message</p>
      <div style="white-space:pre-wrap;padding:16px;background:#f4f4f5;border-radius:8px">${escapeHtml(
        values.message
      )}</div>
    </div>
  `;

  const text = [
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    values.message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: values.email,
        subject: `New project inquiry — ${values.name} (${budget})`,
        html,
        text,
      }),
    });

    if (!response.ok) {
      console.error("[contact] Resend rejected the send:", response.status, await response.text());
      return {
        status: "error",
        message: "Something went wrong sending your message. Please try WhatsApp or email me directly.",
        errors: {},
        values,
      };
    }
  } catch (error) {
    console.error("[contact] Failed to reach Resend:", error);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try WhatsApp or email me directly.",
      errors: {},
      values,
    };
  }

  return {
    status: "success",
    message: "Thanks — your message is on its way. I'll reply within one business day.",
    errors: {},
    values: initialContactState.values,
  };
}
