import express from "express";
import validator from "../middleware/validator.js";
import { subModuleValidator } from "../validations/subModule.js";
import { createSubModule } from "../controllers/subModule.controller.js";
const Router = express.Router();

Router.post("/", validator(subModuleValidator), createSubModule);

export default Router;
