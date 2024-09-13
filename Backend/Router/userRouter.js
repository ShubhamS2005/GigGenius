import express from "express"
import {isAdminAuthenticated,isUserAuthenticated} from "../Middlewares/Auth.js"
import {GetAllClient, GetUser, UserLogout, UserRegister,login} from "../Controllers/userController.js"


const user_router =express.Router()

// post requests 

user_router.post("/register",UserRegister);
user_router.post("/login",login);

// get requests
user_router.get("/users/me",isUserAuthenticated,GetUser)
user_router.get("/logout",UserLogout)
user_router.get("/users",GetAllClient)



export default user_router