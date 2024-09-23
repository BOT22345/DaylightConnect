import {Server} from 'socket.io'
import http from "http";
import express from "express"

const app=express();

const server=http.createServer(app);
const io=new Server(server,{
    cors:{
        origin:["http://localhost:3000"],
        methods:["GET","POST"]
    }
});

const userSocketMap={};//{userId:socketId }

io.on('connection',(socket)=>{
    console.log("a user connected",socket.id);

    const userId=socket.handshake.query.userId;
    if(userId !="undefined"){
        userSocketMap[userId]=socket.id;
    }

    // to send events too all the connected clients
    io.emit("getOnlineUsers",Object.keys(userSocketMap))

    // socket.on to listen to the events on both client and server 
    socket.on("diconnect",()=>{
        console.log("user disconnected",socket.id)
        delete userSocketMap[userId]
        io.emit("getOnlineUsers",Object.keys(userSocketMap))
    })
})

export {app,io,server}