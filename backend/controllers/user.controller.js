 import {User} from "../models/user.model.js"
 import bcrypt from "bcryptjs"

 export const register = async (req , res) =>{
    try{
        const {fullname , email, password} = req.body;
        if(!fullname || !email || !password) return res.status(400).json({message:"All fields are required", success:false});

        const user = await User.findOne({email});

        if(user) return res.status(400).json({message:"User already exist with this email", success:false});

        const hashedPassword = await bcrypt.hash(password, 10);
        const profilePhoto = `https://avatar.iran.liara.run/public/boy`;

        await User.create({
            fullname,
            email,
            password:hashedPassword,
            profilePhoto
        });

        return res.status(201).json({
            message:"Account created successfully",
            success:true
        });
    } catch(error){
        console.log(error)
    }
 }

 export const login = async(req,res) =>{
    try {
        const  {email , password} = req.body;
        if( !email || !password) return res.status(400).json({message:"All fields are required", success:false});

        const user = await User.findOne({email});

        if(!user) return res.status(401).json({message:"Incorrect email or password", success:false});
        const ispasswordMatch = await bcrypt.compare(password, user.password);
        if(!ispasswordMatch) return res.status(401).json({message:"Incorrect email or password",success:false});

        const tokenData = {
            userId:user.id
        }
        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {expiryIn:'1d'});
        return res.status(200).cookie("token", token, {maxAge:1*24*60*60*1000, httpOnly:true, sameSite:'strict'}).json({
            message:`${user.fullname} logged in successfully.`,
            user
        })

    } catch (error) {
        console.log(error)
    }
 }