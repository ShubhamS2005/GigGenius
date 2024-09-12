import express from "express"
import {isAdminAuthenticated,isUserAuthenticated} from "../Middlewares/Auth.js"
import {UserRegister,login} from "../Controllers/userController.js"


const user_router =express.Router()

// post requests 

user_router.post("/register",UserRegister);
user_router.post("/login",login);


export default user_router