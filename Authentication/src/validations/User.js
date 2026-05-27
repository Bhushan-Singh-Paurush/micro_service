import * as z from "zod";

export const userValidator = z.object({
  body: z.object({
    name: z.string(),
    email: z.email(),
    password: z.string(),
    logo: z.string().optional(),
    phone: z.string().optional(),
  }),
});
