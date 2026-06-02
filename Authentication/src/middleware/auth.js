import { getUserByIdService } from "../services/user.service.js";
import apiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import { jwtVerify } from "jose";

export const verifyJWT = asyncHandler(async (req, _, next) => {
  const token =
    req.cookies.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  if (!token) throw new apiError(404, "Token not found");

  const accessSecret = new TextEncoder().encode(
    process.env.ACCESS_TOKEN_SECRET
  );

  try {
    const { payload } = await jwtVerify(token, accessSecret);

    const user = await getUserByIdService({ id: payload._id });

    if (!user) throw new apiError(401, "Invalid token");

    req.user = user;

    next();
  } catch (error) {
    throw new apiError(401, "expire token");
  }
});

export const isClient = asyncHandler(async (req, _, next) => {
  if (req?.user?.role !== "client")
    throw new apiError(403, "This is protected route for client only");
});

export const isAdmin = asyncHandler(async (req, _, next) => {
  if (req?.user?.role !== "admin")
    throw new apiError(403, "This is protected route for admin only");
});
