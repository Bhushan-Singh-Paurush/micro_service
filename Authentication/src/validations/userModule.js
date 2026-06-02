import * as z from "zod";

export const userModuleValidator = z.object({
  body: z.array(
    z.object({
      userId: z.string().length(24),
      subModuleId: z.string().length(24),
      read: z.boolean().optional(),
      write: z.boolean().optional(),
    })
  ),
});

