import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.routes";
import { notFoundMiddleware } from "./middlewares/notFound.middleware";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

const allowedOrigins = [
  "https://mpcelectricalsolutions.com",
  "https://www.mpcelectricalsolutions.com",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: allowedOrigins,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is running.",
  });
});

app.use("/api/contact", contactRoutes);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
