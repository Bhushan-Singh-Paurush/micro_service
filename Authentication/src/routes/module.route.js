import express from "express";
import { createModule } from "../controllers/module.controller.js";
import { moduleValidator } from "../validations/module.js";
import validator from "../middleware/validator.js";
import { isAdmin, verifyJWT } from "../middleware/auth.js";
const Router = express();

Router.post("/",verifyJWT,isAdmin, validator(moduleValidator), createModule);

export default Router;
