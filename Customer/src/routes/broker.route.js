import express from "express";
import { createBrocker } from "../controllers/broker.controller.js";
import validator from "../middlewares/validator.js";
import { createBrokerSchema } from "../validations/broker.validation.js";
const Router = express();

Router.post("/", validator(createBrokerSchema), createBrocker);

export default Router;
