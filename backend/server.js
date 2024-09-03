import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authroutes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
const app=express();
dotenv.config();

const PORT =process.env.PORT || 5000;
const MONGO_DB_URI=process.env.MONGO_DB_URI;

app.get('/',(req,res)=>{
    res.send("chat app backend");
});

app.use('/api/auth',authRoutes);

app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server is running on the port ${PORT}`);
});