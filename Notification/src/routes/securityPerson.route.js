import express from "express"
import { isUser, verifyJWT } from "../middlewares/auth.js"
import { createSecurityPerson, getAllSecurityPerson } from "../controllers/securityPerson.controller.js"
import validator from "../middlewares/validator.js";
import { createSecurityPersonValidator, userIdValidator } from "../validations/securityPerson.js";
const Router = express.Router()

Router.post("/",verifyJWT,validator(createSecurityPersonValidator),createSecurityPerson)

Router.get("/",verifyJWT,validator(userIdValidator),getAllSecurityPerson)
export default Router;