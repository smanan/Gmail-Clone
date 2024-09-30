import express from 'express'
import dotenv from 'dotenv';
import connectDB from './db/connectDB.js';
import cookieParser from 'cookie-parser';
import cors from "cors"

dotenv.config({});
connectDB();

const PORT = 8080;
const app = express();

// app.get("/home",(req,res)=>{
//     return res.status(200).json({message:'i am coming from backend',success:true})
// })


// middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(cookieParser());

const corsOptions = {
    origin:'http://localhost:5173/',
    Credentials: true
}

app.listen(PORT , ()=>{
    console.log(`Server running at port ${PORT}`)
})