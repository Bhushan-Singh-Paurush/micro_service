import express from "express";
import validator from "../middlewares/validator.js";
import {
  createNotificationValidator,
  notificationIdValidator
} from "../validations/notification.js";
import {
  createNotification,
  getNotification,
  getNotificationById,
  sendNotification
} from "../controllers/notification.controller.js";
import { userIdValidator } from "../validations/securityPerson.js";
import { verifyJWT } from "../middlewares/auth.js";

const Router = express.Router();

Router.post("/", validator(createNotificationValidator), createNotification);

Router.get("/",verifyJWT, validator(userIdValidator), getNotification);

Router.get("/:id",validator(notificationIdValidator),getNotificationById)

Router.post("/send-notification",sendNotification)


export default Router;
