import * as z from "zod";

export const createNotificationValidator = z.object({
  body: z.object({
    service_name: z.string(),
    userId: z.string().length(24, "User id must be 24 character"),
    data: z.record(z.any()),
  }),
});

export const notificationIdValidator=z.object({
  params:z.object({
    id:z.string().length(36,"Notification id must be of 36 character")
  })
})

export const sendNotificationValidator=z.object({
      body:z.object({
        recipientEmails:z.string(),
        emailSubject:z.string(),
        emailBody:z.string()
      })
})