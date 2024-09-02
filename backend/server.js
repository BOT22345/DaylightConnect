import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authroutes.js";
const app=express();
dotenv.config();

const PORT =process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send("chat app backend");
});

app.use('/api/auth',authRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on the port ${PORT}`);
});