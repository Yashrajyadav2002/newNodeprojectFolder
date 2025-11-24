const express = require = ("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app= express();


//middlewares 

app.use(express.json());
app.use(cookieParser());
app.use(cors({
     origin: "http://localhost:5000",   // React frontend
 credentials: true                  // allow cookies
}));

//momgoDB Connection 
mongoose.connect("");


app.listen(5000,()=>{
    console.log("server Is Run On port 5000");
})
