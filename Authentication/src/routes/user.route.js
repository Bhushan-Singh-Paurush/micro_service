import express from "express";
import validator from "../middleware/validator.js";
import { userIdValidator, userValidator } from "../validations/User.js";
import { createUser, getAllUsers, getUserById } from "../controllers/user.controller.js";
import { isAdmin, verifyJWT } from "../middleware/auth.js";

const Router = express.Router();

Router.post("/",verifyJWT,isAdmin, validator(userValidator), createUser);

Router.get("/",verifyJWT,isAdmin,getAllUsers)

Router.get("/:id", validator(userIdValidator), getUserById);


export default Router;
