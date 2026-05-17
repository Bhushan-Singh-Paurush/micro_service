import express from "express";
import { createParking } from "../controllers/parking.controller.js";
import validator from "../middleware/validator.js"
import { parkingValidator } from "../validations/parking.js";
const Router = express.Router();

Router.post("/",validator(parkingValidator) ,createParking);

export default Router;
