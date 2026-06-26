import {
  createNotificationService,
  getNotificationByIdService,
  getNotificationService,
  sendNotificationService,
} from "../services/notification.service.js";
import apiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const createNotification = asyncHandler(async (req, res) => {
  await createNotificationService(req.body);

  return res
    .status(201)
    .json(new apiResponse(201, "Notification created successfully", null));
});

export const getNotification = asyncHandler(async (req, res) => {

  const notifications = await getNotificationService(req.user._id,req.query.page,req.query.limit);

  return res
    .status(201)
    .json(new apiResponse(201, "Get Notifications", notifications));
});

export const getNotificationById = asyncHandler(async (req, res) => {
  const notification = await getNotificationByIdService(req.params);

  return res
    .status(201)
    .json(new apiResponse(201, "Particular Notification", notification));
});



export const sendNotification=asyncHandler(async(req,res)=>{
      await sendNotificationService(req.body)

       return res
    .status(201)
    .json(new apiResponse(201, "Notification send successfully"));

})