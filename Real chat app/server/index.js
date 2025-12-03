const express = require("express");
const http = require("http");
const {Server} = require("socket.io");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();
const app = express();
app.use(cors());

const server = http.createServer(app);

const io=new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket)=>{
    console.log(`User connected: ${socket.id}`);

    socket.on('send_message', (data)=>{
        console.log(data);
        socket.broadcast.emit('receive_message', data);
    })

    socket.on('disconnect', ()=>{
        console.log("User disconnected", socket.id);
    });
});

server.listen(5000, ()=>{
    console.log("server running on port 5000");
})