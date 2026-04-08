import { Resend } from "resend";
import { env } from "./env";

if (!env.resendApiKey) {
  throw new Error("RESEND_API_KEY is missing in environment variables.");
}

export const resend = new Resend(env.resendApiKey);
