import mongoose from "mongoose";
import { env } from "./env";

export async function connectDB(): Promise<void> {
  if (!env.mongoUri) {
    throw new Error("MONGODB_URI is missing in environment variables.");
  }

  await mongoose.connect(env.mongoUri);
  console.log("MongoDB connected successfully.");
}
