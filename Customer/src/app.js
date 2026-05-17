import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import brokerRouter from "../src/routes/broker.route.js";
const app = express();

app.use(morgan("dev"));

app.use(helmet());

app.use(cors());

app.use(express.json({ limit: "16kb" }));

app.use(urlencoded({ limit: "16kb" }));

app.use(cookieParser());

app.use("/api/v1/broker", brokerRouter);

app.use(async (error, req, res, next) => {
  return res.status(error.statusCode || 500).json({
    success: false,
    message: error.message,
    data: error.data,
    error: error.error,
    stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
  });
});

export default app;
