import {
  forgotPasswordService,
  loginService,
  refreshTokenService,
  resetPasswordService,
  sendOTPService,
} from "../services/auth.service.js";
import { getUserByIdService } from "../services/user.service.js";
import { forgotPasswordTemplate } from "../templates/forgotPassword.template.js";
import { otpTemplate } from "../templates/otp.template.js";
import apiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const login = asyncHandler(async (req, res) => {
  const { UserData, refreshToken, accessToken } = await loginService(req.body);

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV == "production" ? true : false,
    sameSite: process.env.NODE_ENV == "production" ? "none" : "lax",
    domain: process.env.NODE_ENV == "production" ? ".bhushan.sbs" : undefined
  };

  if (req.body.isPersist) {
    options.maxAge = 7 * 24 * 60 * 60 * 1000;
  }

  return res
    .status(200)
    .cookie("refreshToken", refreshToken, options)
    .cookie("accessToken", accessToken, options)
    .json(new apiResponse(200, "User details", UserData));
});

export const refreshAccessToken = asyncHandler(async (req, res) => {
  const { refreshToken, accessToken, isPersist, UserData } =
    await refreshTokenService(req.cookies);

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV == "production" ? true : false,
    sameSite: process.env.NODE_ENV == "production" ? "none" : "lax",
    domain: process.env.NODE_ENV == "production" ? ".bhushan.sbs" : undefined
  };

  if (isPersist) options.maxAge = 7 * 24 * 60 * 60 * 1000;
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(new apiResponse(200, "Access token refresh successfully", UserData));
});

export const sendLoginOtp = asyncHandler(async (req, res) => {
  await sendOTPService({
    email: req.body.email,
    subject: "Motion Tech Login OTP",
    template: otpTemplate,
  });

  return res
    .status(200)
    .json(new apiResponse(200, "OTP send successfully", null));
});

export const forgotPassword = asyncHandler(async (req, res) => {
  await forgotPasswordService({
    email: req.body.email,
    subject: "Forgot Password",
    template: forgotPasswordTemplate,
  });

  return res
    .status(200)
    .json(
      new apiResponse(200, "Reset Password link is send to your email", null)
    );
});

export const resetPassword = asyncHandler(async (req, res) => {
  await resetPasswordService(req.body);

  return res
    .status(200)
    .json(new apiResponse(200, "password reset successfully", null));
});

export const logout = asyncHandler(async (req, res) => {
  const user = await getUserByIdService({ id: req.user._id });

  await user.save();

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV == "production" ? true : false,
    sameSite: process.env.NODE_ENV == "production" ? "none" : "lax",
    domain: process.env.NODE_ENV == "production" ? ".bhushan.sbs" : undefined
  };

  return res
    .status(200)
    .cookie("accessToken", "", options)
    .cookie("refreshToken", "", options)
    .json(new apiResponse(200, "Logout successfully"));
});
