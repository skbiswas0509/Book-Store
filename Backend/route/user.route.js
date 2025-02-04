import express from 'express'
import { login, signup } from '../controller/user.controller.js'

const UserRouter = express.Router()

UserRouter.post("/signup",signup)
UserRouter.post("/login",login)

export default UserRouter