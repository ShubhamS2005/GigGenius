import express from "express"
import {config} from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import mongoose from "mongoose";
import cloudinary from "cloudinary"
import {errormiddleware} from "./Middlewares/errormiddleware.js"

const app=express();

config({path:"./config/config.env"})

const port=process.env.PORT || 3000
const uri=process.env.DATABASE_URI

app.use(
    cors({
        origin:[process.env.FRONTEND_URL,process.env.DASHBOARD_URL],
        methods:["GET","POST","PUT","DELETE"],
        credentials:true
    })  
)

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app listening 
app.listen(port,(req,res)=>{
    console.log(`App running on port ${port}`);
})

// using cloudinary
cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
})

// middleware error
app.use(errormiddleware)
