import {User} from "../Models/userSchema.js"
import {catchAsyncErrors}  from "../Middlewares/CatchAssyncErrors.js"
import {generateToken} from "../Utils/jwtToken.js"
import cloudinary from "cloudinary"
import ErrorHandler from "../Middlewares/errormiddleware.js" 

export  const UserRegister=catchAsyncErrors(async(req,res,next)=>{
    const {firstname,lastname,email,password,phone,role}=req.body
    if(!firstname||!lastname||!email||!password||!phone||!role){
        return next(new ErrorHandler("Please Fill Full Form"),400)
    }
    const user=await User.findOne({email})
    if(user){
        return next(new ErrorHandler("User Already Registered"),400)
    }else{
        await User.create({firstname,lastname,email,password,phone,role})
        // generateToken(user,"user registered",200,res)
        res.status(200).json({
            success:true,
            message:"User Registered"
        })
    }
})