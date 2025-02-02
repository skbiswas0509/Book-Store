import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

if(!process.env.MongoDBURI){
    throw new Error(
        "Please provide mongodb_uri in the .env"
    )
}

async function connectDB() {
    try {
        await mongoose.connect(process.env.MongoDBURI)
        console.log('Connected DB')
    } catch (error) {
        console.log("MongoDb connection Error", error)
        process.exit(1)       
    }
}

export default connectDB