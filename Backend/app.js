import express from "express"
import {config} from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import mongoose from "mongoose";
import cloudinary from "cloudinary"
import {errormiddleware} from "./Middlewares/errormiddleware.js"
import user_router from "./Router/userRouter.js";
import { User } from "./Models/userSchema.js";

const app=express();

config({path:"./config/config.env"})

const port=process.env.PORT || 3000
const uri=process.env.DATABASE_URI

app.use(
    cors({
        origin:[process.env.FRONTEND_URL],
        methods:["GET","POST","PUT","DELETE"],
        credentials:true
    })  
)

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
    })
  );

// app listening 
app.listen(port,(req,res)=>{
    console.log(`App running on port ${port}`);
})

// app use
app.use("/api/v1/user",user_router)
app.get("/verify",async(req,res)=>{
    const updateInfo=await User.updateOne({_id:req.query.id},{$set:{isVerified:1}})
    
    console.log(updateInfo);
    res.redirect(`${process.env.FRONTEND_URL}`)
})

// using cloudinary
cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
})

// DataBase Connect
try {
    mongoose.connect(uri);
    console.log("Database Connected")
} catch (error) {
    console.log(error);
}

// middleware error
app.use(errormiddleware)
