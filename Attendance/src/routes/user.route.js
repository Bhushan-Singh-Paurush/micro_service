import express from "express"
import { createUser, getUser } from "../controllers/user.controller.js"

const Router = express.Router()

Router.route("/").post(createUser).get(getUser)

export default Router;