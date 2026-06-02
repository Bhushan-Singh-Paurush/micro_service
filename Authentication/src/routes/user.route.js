import express from "express";
import validator from "../middleware/validator.js";
import { userIdValidator, userValidator } from "../validations/User.js";
import { createUser, getUserById } from "../controllers/user.controller.js";

const Router = express.Router();

Router.post("/", validator(userValidator), createUser);

Router.get("/:id",validator(userIdValidator),getUserById)

export default Router;
