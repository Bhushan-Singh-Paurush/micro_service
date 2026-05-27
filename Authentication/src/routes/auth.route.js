import express from "express";
import validator from "../middleware/validator.js";
import {
  emailValidator,
  loginValidator,
  refreshTokenValidator,
  resetPasswordValidator,
} from "../validations/auth.js";
import {
  forgotPassword,
  login,
  refreshAccessToken,
  resetPassword,
  sendLoginOtp,
} from "../controllers/auth.controller.js";
const Router = express();

Router.post("/login", validator(loginValidator), login);

Router.post(
  "/refreshToken",
  validator(refreshTokenValidator),
  refreshAccessToken
);

Router.post("/login/sendOTP", validator(emailValidator), sendLoginOtp);

Router.post("/login/forgotPassword", validator(emailValidator), forgotPassword);

Router.post(
  "/reset-password",
  validator(resetPasswordValidator),
  resetPassword
);

export default Router;
