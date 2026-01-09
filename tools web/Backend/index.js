const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const AdminRoute = require("./routes/AdminRoute");
const userRoute = require("./routes/UserRoute");
const ProductRoute = require("./routes/productRoute");
// const paymentRoute = require("./routes/paymentRoute");
const orderRoute = require("./routes/orderRoute");
mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("Database Succesfully Connected!");
})

// Use body-parser middleware for JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/admin", AdminRoute);
app.use("/user", userRoute);
app.use("/product", ProductRoute);
// app.use("/api/payment",paymentRoute);
app.use("/orders",orderRoute);





const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
