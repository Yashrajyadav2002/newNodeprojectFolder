const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/AdminController");
const verifyAdmin = require("../middlewares/AdminMiddle");

// Auth
router.post("/login", AdminController.adminLogin);

// Dashboard
router.get("/dashboard", verifyAdmin, AdminController.getDashboardStats);

// Products
router.post("/products", verifyAdmin, AdminController.addProduct);
router.get("/products", verifyAdmin, AdminController.getProductsWithStock);

// Orders
router.get("/orders", verifyAdmin, AdminController.getAllOrders);

module.exports = router;
