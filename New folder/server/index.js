const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect();


app.listen(3500,()=>{
    console.log("server is running on port 3500")
})