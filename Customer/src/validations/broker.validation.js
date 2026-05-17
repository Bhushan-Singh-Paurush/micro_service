import * as z from "zod";

export const createBrokerSchema = z.object({
  body: z.object({
    name: z.string(),
    aadhar: z.string(),
  }),
});
