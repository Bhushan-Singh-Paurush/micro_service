import express from "express"
import { createUser, getUser } from "../controllers/user.controller.js"

const Router = express.Router()

Router.route("/").post(createUser)

Router.route("/search").post(getUser)

export default Router;