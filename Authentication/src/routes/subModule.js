import express from "express";
import validator from "../middleware/validator.js";
import { subModuleValidator } from "../validations/subModule.js";
import { createSubModule } from "../controllers/subModule.controller.js";
import { isAdmin, verifyJWT } from "../middleware/auth.js";
const Router = express.Router();

Router.post("/",verifyJWT,isAdmin, validator(subModuleValidator), createSubModule);

export default Router;
