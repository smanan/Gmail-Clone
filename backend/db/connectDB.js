import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO.URI);
        console.log('Mongodb connected successfully')
    }catch(error){
        console.log(error)
    }
}

export default connectDB