import * as z from "zod";

export const moduleValidator = z.object({
  body: z.object({
    name: z.string(),
  }),
});
