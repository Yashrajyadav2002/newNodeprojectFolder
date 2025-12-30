const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");

const AdminRoute = require("./routes/adminRoute");
const ProductRoute = require("./routes/productRoute");

// Connect to MongoDB
mongoose.connect(process.env.DBCONN)
    .then(() => console.log("Database successfully connected!"))
    .catch((err) => console.log("Database connection error:", err));

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Serve uploaded images
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/admin", AdminRoute);
app.use("/product", ProductRoute);

// Start server
app.listen(3500, () => {
    console.log("Server running on port 3500!");
});
