import * as z from "zod"

export const createNotificationValidator=z.object({
       body:z.object({
         service_name:z.string(), 
         userId:z.string().length(32,"User id must be 32 character"), 
         data:z.record(z.any())
       })
})