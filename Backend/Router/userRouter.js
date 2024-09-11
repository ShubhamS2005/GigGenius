import express from "express"
import {isAdminAuthenticated,isUserAuthenticated} from "../Middlewares/Auth.js"
import {UserRegister} from "../Controllers/userController.js"


const user_router =express.Router()

// post requests 

user_router.post("/register",UserRegister)


export default user_router