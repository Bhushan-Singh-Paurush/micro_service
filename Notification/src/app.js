import express, { json, urlencoded } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors";

import notificationRoute from "../src/routes/notification.route.js"
const app = express();

app.use(morgan("dev"));

app.use(helmet());

app.use(cors());

app.use(express.json({ limit: "16kb" }));

app.use(urlencoded({ limit: "16kb" }));

app.use(cookieParser());

app.use("/api/v1/notification",notificationRoute)

app.use((error, req, res) => {
  return res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Internal Server Error",
    data: error.data || null,
    error: error.error,
    stack: process.env.NODE_ENV === "production" ? undefined : error.stack,
  });
});

export default app;
