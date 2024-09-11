import {catchAsyncErrors} from "../Middlewares/CatchAssyncErrors.js"
import { User } from "../Models/userSchema.js";
import ErrorHandler from "./errormiddleware.js";
import jwt from "jsonwebtoken"
export const isAdminAuthenticated=catchAsyncErrors(async(req,res,next)=>{
     const token=req.cookies.adminToken;
     if(!token){
        return next(new ErrorHandler("Admin not authenticated",400))

     }
     const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)
     req.user=await User.findById(decoded.id);
    //  Autherization
     if(req.user.role!=="Admin"){
        return next(new ErrorHandler(`${req.user.role} not autherized for this resourse`,403))
     }
     next()

})

export const isUserAuthenticated=catchAsyncErrors(async(req,res,next)=>{
    const token=req.cookies.userToken;
    if(!token){
       return next(new ErrorHandler("User not authenticated",400))

    }
    const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)
    req.user=await User.findById(decoded.id);
   //  Autherization
    if(req.user.role!=="User"){
       return next(new ErrorHandler(`${req.user.role} not autherized for this resourse`,403))
    }
    next()

})