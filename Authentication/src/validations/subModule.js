import * as z from "zod";

export const subModuleValidator = z.object({
  body: z.object({
    name: z.string(),
    moduleId: z.string().length(24),
  }),
});
