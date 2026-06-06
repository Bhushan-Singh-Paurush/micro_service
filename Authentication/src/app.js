import express, { urlencoded } from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import userRoute from "../src/routes/user.route.js";
import moduleRoute from "../src/routes/module.route.js";
import userModuleRoute from "../src/routes/userModule.js";
import subModuleRoute from "../src/routes/subModule.js";
import authRoute from "../src/routes/auth.route.js";

const app = express();

app.use(morgan("dev"));

app.use(helmet());

app.use(
  cors({
    origin:process.env.ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));

app.use(urlencoded({ limit: "16kb" }));

app.use(cookieParser());

app.use("/",(req,res)=>{
   res.send("Authentication server is running")
})

app.use("/api/v1/user", userRoute);

app.use("/api/v1/module", moduleRoute);

app.use("/api/v1/subModule", subModuleRoute);

app.use("/api/v1/userModule", userModuleRoute);

app.use("/api/v1/auth", authRoute);

app.use(async (error, req, res, next) => {
  return res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Internal server error",
    data: null,
    error: error.error,
    stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
  });
});

export default app;
