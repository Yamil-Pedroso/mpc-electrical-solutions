import app from "./app";
import { connectDB } from "./config/db";
import { env } from "./config/env";

async function startServer() {
  try {
    await connectDB();

    app.listen(env.port, "127.0.0.1", () => {
      console.log(`Server running on http://127.0.0.1:${env.port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
