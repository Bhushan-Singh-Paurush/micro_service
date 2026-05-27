import express from "express";
import { createUserModule } from "../controllers/userModule.controller.js";
import validator from "../middleware/validator.js";
import { userModuleValidator } from "../validations/userModule.js";
const Router = express.Router();

Router.post("/", validator(userModuleValidator), createUserModule);

export default Router;
