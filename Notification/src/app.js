import express, { json, urlencoded } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors";

import notificationRoute from "../src/routes/notification.route.js";
import securityPersonRoute from "../src/routes/securityPerson.route.js"
const app = express();

app.use(morgan("dev"));

app.use(helmet());

app.use(
  cors({
    origin:process.env.NODE_ENV!=="production" ? 'http://localhost:3000' :process.env.ORIGIN,
    credentials:true
  })
);

app.use(express.json({ limit: "16kb" }));

app.use(urlencoded({ limit: "16kb" }));

app.use(cookieParser());



app.use("/api/v1/notification", notificationRoute);

app.use("/api/v1/securityPerson",securityPersonRoute)

app.use("/",(req,res)=>{
  res.send("Notification server is running.......")
})


app.use(async (error, req, res, next) => {
  return res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Internal Server Error",
    data: error.data || null,
    error: error.error,
    stack: process.env.NODE_ENV === "production" ? undefined : error.stack,
  });
});

export default app;
