// Shared between the contact form (client) and its Server Action.
// Kept out of the "use server" module, which may only export async functions.

export const PROJECT_TYPES = [
  "Business Website",
  "SaaS Product",
  "E-commerce",
  "AI Integration",
  "Other",
] as const;

export const BUDGETS = [
  "Not sure yet",
  "Under $1,000",
  "$1,000 - $5,000",
  "$5,000 - $15,000",
  "$15,000+",
] as const;

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors: Partial<Record<"name" | "email" | "phone" | "message", string>>;
  values: {
    name: string;
    email: string;
    phone: string;
    projectType: string;
    budget: string;
    message: string;
  };
};

export const initialContactState: ContactFormState = {
  status: "idle",
  message: "",
  errors: {},
  values: { name: "", email: "", phone: "", projectType: "", budget: "", message: "" },
};
