const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/adminController");

// For handling file uploads
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // make sure this folder exists
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Admin login
router.post("/login", AdminController.adminLogin);

// Add product (multiple images)
router.post("/addproduct", upload.array("images", 5), AdminController.addProduct);

module.exports = router;
