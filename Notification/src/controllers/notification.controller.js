import { createNotificationService } from "../services/notification.service.js"
import apiResponse from "../utils/apiResponse.js"
import asyncHandler from "../utils/asyncHandler.js"

export const createNotification=asyncHandler(async(req,res)=>{
      await createNotificationService(req.body)

      return res.status(201).json(apiResponse(201,"Notification created successfully",null))
})