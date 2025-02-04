import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import connectDB from "./config/connectDB.js";
import bookRouter from "./route/book.route.js";
import cors from 'cors'
import UserRouter from "./route/user.route.js";


const app = express();
app.use(cors());
app.use(express.json())
const PORT = process.env.PORT || 4000;

const MongoDBURI = process.env.MongoDBURI
//connect to mongodb
try {
    mongoose.connect(MongodDBURI,{})
    console.log("COnnected to mongodb")
} catch (error) {
    console.log("error: ", error)
}

//defining routes
app.use("/book",bookRouter)
app.use("/user",UserRouter)

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is listening on port ${PORT}`)
    })
})