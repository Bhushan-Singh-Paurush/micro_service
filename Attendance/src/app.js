import express, { urlencoded } from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import attendanceRouter from "../src/routes/attendance.route.js";

const app = express();

app.use(helmet());

app.use(
  morgan(":date[utc] :remote-addr :method :url :status :response-time ms")
);

app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));

app.use(urlencoded({ limit: "16kb" }));

app.use(cookieParser());

app.use("/api/v1/attendance", attendanceRouter);

app.use(async (error, req, res, next) => {
  return res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Internal server error",
    data: null,
    error: error.error,
    stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
  });
});

export { app };
