const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");
const AdminRoute = require("./routes/adminRoute");
mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("Database Succesfully Connected!");
})

// Use body-parser middleware for JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/admin", AdminRoute);






app.listen(3500, ()=>{
    console.log("server run on 8000 Port!")
})