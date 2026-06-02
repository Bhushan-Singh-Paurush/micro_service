import * as z from "zod";

export const createSecurityPersonValidator = z.object({
  body: z.object({
    email: z.string(),
    phone: z.string(),
    name: z.string(),
    status: z.boolean().optional()
  }),
});


export const userIdValidator = z.object({
  user: z.object({
      _id:z.string().length(24, "User id must be of 24 characters"),
  })
})

