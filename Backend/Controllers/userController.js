import {User} from "../Models/userSchema.js"
import {catchAsyncErrors}  from "../Middlewares/CatchAssyncErrors.js"
import {generateToken} from "../Utils/jwtToken.js"
import cloudinary from "cloudinary"
import ErrorHandler from "../Middlewares/errormiddleware.js" 
import nodemailer from "nodemailer"

export  const UserRegister=catchAsyncErrors(async(req,res,next)=>{
    const {firstname,lastname,email,password,phone,role}=req.body
    if(!firstname||!lastname||!email||!password||!phone||!role){
        return next(new ErrorHandler("Please Fill Full Form"),400)
    }
    const user=await User.findOne({email})
    if(user){
        return next(new ErrorHandler("User Already Registered"),400)
    }else{
        const userData=await User.create({firstname,lastname,email,password,phone,role})
        // generateToken(user,"user registered",200,res)
        sendVerifymail(firstname,lastname,email,userData._id)
        res.status(200).json({
            success:true,
            message:"User Registered, Verify your Mail"
        })
    }
})

//Send Mail
export const sendVerifymail=async(firstname,lastname,email,user_id)=>{
    try {
        const transpoter=nodemailer.createTransport({
            host:'smtp.gmail.com',
            port:465,
            requireTLS:true,
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.PASSWORD_USER
            }
        });
        const mailoptions={
            from:process.env.EMAIL_USER,
            to:email,
            subject:'Verification of GigGenius',
            html:`<p>Hii ${firstname} ${lastname} ,this email is send to inform you that your account is created on GigGenius please verify your account by click here <a href="http://127.0.0.1:${process.env.PORT}/verify?id=${user_id}">Verify</a> </p>`
        }

        transpoter.sendMail(mailoptions,function(error,info){
            if(error){
                console.log(error);
            }
            else{
                console.log("Email has been sent:- ",info.response);
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}

export const login=catchAsyncErrors(async(req,res,next)=>{
    const{email,password,role,confirmPassword}=req.body;
    if(!email||!password||!confirmPassword||!role){
        return next(new ErrorHandler("Please Provide all details",400));
    }
    if(password!==confirmPassword){
        return next(new ErrorHandler("Password and confirm password not same",400));
    }
    const user=await User.findOne({email}).select("+password")
    if(!user){
        return next(new ErrorHandler("Invalid Email or password",400));
    }
    const isPasswordMatched=await user.comparePassword(password);
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid Email or password",400));
    }
    if(role!==user.role){
        return next(new ErrorHandler("User with this role not found",400));
    }

    if(user.isVerified===0){
        return next(new ErrorHandler("User is not verifyied please click on link send to you"));
    }
    generateToken(user,"User Logged in Successfully",200,res)
})

export const GetAllClient=catchAsyncErrors(async(req,res,next)=>{
    const clients=await User.find({role:"Client"})
    res.status(200).json({
        success:true,
        clients
    })

})

export const GetUser=catchAsyncErrors(async(req,res,next)=>{
    const user=req.user
    res.status(200).json({
        success:true,
        user
    })

})

export const UserLogout=catchAsyncErrors(async(req,res,next)=>{
    res.status(200).cookie("userToken","",{
        httpOnly:true,
        expires:new Date(Date.now())
    }).json({
        success:true,
        message:"User out succesfully"
    })
})