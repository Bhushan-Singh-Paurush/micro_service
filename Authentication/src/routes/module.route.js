import express from "express";
import { createModule } from "../controllers/module.controller.js";
import { moduleValidator } from "../validations/module.js";
import validator from "../middleware/validator.js";
const Router = express();

Router.post("/", validator(moduleValidator), createModule);

export default Router;
