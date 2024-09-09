import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authroutes.js";
import messageRoutes from "./routes/messageroutes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app=express();
const PORT =process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse the incoming requrests with json 
app.use(cookieParser());

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);

// app.get('/',(req,res)=>{
//     res.send("chat app backend");
// });

app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server is running on the port ${PORT}`);
});