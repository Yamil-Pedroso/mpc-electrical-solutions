import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: Number(process.env.PORT) || 3014,
  mongoUri: process.env.MONGODB_URI || "",
  resendApiKey: process.env.RESEND_API_KEY || "",
  emailFrom: process.env.EMAIL_FROM || "",
  emailTo: process.env.EMAIL_TO || "",
  logoUrl: process.env.LOGO_URL || "",
  nodeEnv: process.env.NODE_ENV || "development",
};
