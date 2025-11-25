const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieroute=require("./routes/cookieRoute");
const app = express();



// MIDDLEWARE
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/",cookieroute);



// MONGO CONNECTION
mongoose
  .connect("mongodb://127.0.0.1:27017/cookieAuth")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));




// SERVER START
app.listen(8000, () => console.log("Server running on port 8000"));
