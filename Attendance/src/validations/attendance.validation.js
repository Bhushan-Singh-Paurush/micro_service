import * as z from "zod";

export const attendanceSchema = z.object({
  body: z.object({
    crop: z.string(),
    timeStamp: z.coerce.date(),
    role: z.string(),
    camera_id: z.string(),
    status: z.string(),
  }),
});
