import * as z from "zod";

export const loginValidator = z.object({
  body: z.object({
    email: z.email(),
    password: z.string().min(8, "Password is not less then 8 letters"),
    isPersist: z.boolean(),
    otp: z.string().length(6),
  }),
});

export const refreshTokenValidator = z.object({
  cookies: z.object({
    refreshToken: z.string(),
  }),
});

export const emailValidator = z.object({
  body: z.object({
    email: z.email(),
  }),
});

export const resetPasswordValidator = z.object({
  body: z.object({
    password: z.string().min(8, "Password is not less then 8 letters"),
    token: z.string(),
  }),
});

export const userIdValidator = z.object({
  user: z.object({
    _id: z.string().length(24, "User id must be of 24 characters"),
  }),
});
