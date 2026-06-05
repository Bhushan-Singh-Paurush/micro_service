import express from "express";
import {
  createUserModule,
  getUserModules,
} from "../controllers/userModule.controller.js";
import validator from "../middleware/validator.js";
import { userModuleValidator } from "../validations/userModule.js";
import { userIdValidator } from "../validations/User.js";
import { isAdmin, verifyJWT } from "../middleware/auth.js";
const Router = express.Router();

Router.post("/",validator(userModuleValidator), createUserModule);

Router.get("/:id", validator(userIdValidator), getUserModules);

export default Router;
