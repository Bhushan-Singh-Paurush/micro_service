import express from "express"
import validator from "../middlewares/validator.js"
import { createNotificationValidator } from "../validations/notification.js"
import { createNotification } from "../controllers/notification.controller.js"

const Router=express.Router()

Router.post("/",validator(createNotificationValidator),createNotification)

export default Router;