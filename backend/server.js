import path from 'path'
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authroutes.js";
import messageRoutes from "./routes/messageroutes.js";
import userRoutes from "./routes/userroutes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app,server,io } from "./socket/socket.js";

const PORT =process.env.PORT || 5000;

const __dirname=path.resolve();

dotenv.config();

app.use(express.json()); // to parse the incoming requrests with json 
app.use(cookieParser());

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes);

app.use(express.static(path.join(__dirname,"frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

// app.get('/',(req,res)=>{
//     res.send("chat app backend");
// });

server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server is running on the port ${PORT}`);
});