import * as z from "zod";

export const parkingValidator = z.object({
  body: z.object({
    timestamp: z.coerce.date(),
    numberPlate: z.string(),
  }),
});
