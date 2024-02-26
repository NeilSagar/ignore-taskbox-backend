import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URL=process.env.MONGODB_URI;

const connectDB=async ()=>{
    try {
        await mongoose.connect(URL);
        console.log("Connected with MongoDB:local successfully!");
    } catch (error) {
        console.log("Could not connect with MongoDB:local, Error:",error.message);
    }
}

export default connectDB;