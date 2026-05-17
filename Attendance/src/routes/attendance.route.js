import express from "express";
import { createAttendance } from "../controllers/attendance.controller.js";
import { attendanceSchema } from "../validations/attendance.validation.js";
import { validator } from "../middlewares/validator.js";
const Router = express.Router();

Router.post("/", validator(attendanceSchema), createAttendance);

export default Router;
