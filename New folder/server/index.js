const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

const AdminRoute = require("./routes/adminRoute");
const ProductRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");

// ================= DATABASE =================
mongoose.connect(process.env.DBCONN)
    .then(() => console.log("✅ Database successfully connected"))
    .catch((err) => console.log("❌ Database connection error:", err));

// ================= MIDDLEWARE =================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

// ================= STATIC =================
app.use("/uploads", express.static("uploads"));

// ================= ROUTES =================
app.use("/admin", AdminRoute);
app.use("/product", ProductRoute);
app.use("/user", userRoute);
app.use("/orders", orderRoute);

// ================= SERVER =================
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
