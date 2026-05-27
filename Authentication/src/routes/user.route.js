import express from "express";
import validator from "../middleware/validator.js";
import { userValidator } from "../validations/User.js";
import { createUser } from "../controllers/user.controller.js";
const Router = express.Router();

Router.post("/", validator(userValidator), createUser);

export default Router;
