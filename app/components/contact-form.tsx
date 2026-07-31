"use client";

import { useActionState } from "react";
import { ArrowRight, CheckCircle2, Loader2, TriangleAlert } from "lucide-react";
import { submitContactForm } from "../actions/contact";
import { BUDGETS, PROJECT_TYPES, initialContactState } from "../lib/contact";

const inputClasses =
  "w-full rounded-lg border border-white/10 bg-navy-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400/60 focus:outline-none focus:ring-2 focus:ring-brand-400/20";

const errorInputClasses =
  "w-full rounded-lg border border-red-400/60 bg-navy-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-400/20";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-sm text-red-400">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialContactState);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-10 text-center" aria-live="polite">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-mint-400/15 text-mint-300">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <div>
          <p className="text-lg font-semibold text-white">Message sent</p>
          <p className="mt-2 text-sm leading-7 text-slate-400">{state.message}</p>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="grid gap-4">
      {state.message ? (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
        >
          <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{state.message}</span>
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            defaultValue={state.values.name}
            aria-invalid={Boolean(state.errors.name)}
            aria-describedby={state.errors.name ? "name-error" : undefined}
            placeholder="Jane Doe"
            className={state.errors.name ? errorInputClasses : inputClasses}
          />
          <FieldError id="name-error" message={state.errors.name} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            defaultValue={state.values.email}
            aria-invalid={Boolean(state.errors.email)}
            aria-describedby={state.errors.email ? "email-error" : undefined}
            placeholder="jane@company.com"
            className={state.errors.email ? errorInputClasses : inputClasses}
          />
          <FieldError id="email-error" message={state.errors.email} />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-300">
          WhatsApp number{" "}
          <span className="font-normal text-slate-500">(optional — include country code)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          defaultValue={state.values.phone}
          aria-invalid={Boolean(state.errors.phone)}
          aria-describedby={state.errors.phone ? "phone-error" : undefined}
          placeholder="+234 810 571 5588"
          className={state.errors.phone ? errorInputClasses : inputClasses}
        />
        <FieldError id="phone-error" message={state.errors.phone} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-slate-300">
            Project type
          </label>
          <select
            id="projectType"
            name="projectType"
            defaultValue={state.values.projectType || PROJECT_TYPES[0]}
            className={inputClasses}
          >
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type} className="bg-navy-900">
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="mb-2 block text-sm font-medium text-slate-300">
            Budget
          </label>
          <select
            id="budget"
            name="budget"
            defaultValue={state.values.budget || BUDGETS[0]}
            className={inputClasses}
          >
            {BUDGETS.map((range) => (
              <option key={range} value={range} className="bg-navy-900">
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
          Tell me about your project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          defaultValue={state.values.message}
          aria-invalid={Boolean(state.errors.message)}
          aria-describedby={state.errors.message ? "message-error" : undefined}
          placeholder="What are you looking to build?"
          className={state.errors.message ? errorInputClasses : inputClasses}
        />
        <FieldError id="message-error" message={state.errors.message} />
      </div>

      <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor="company">Company (leave this empty)</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-2 inline-flex items-center justify-center rounded-lg bg-mint-400 px-6 py-3 text-sm font-semibold text-navy-950 transition hover:bg-mint-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? (
          <>
            Sending
            <Loader2 className="ml-2 h-4 w-4 animate-spin" />
          </>
        ) : (
          <>
            Send Inquiry
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
