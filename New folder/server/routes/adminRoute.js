const express = require("express");
const router = express.Router();
const { adminLogin, addProduct } = require("../controllers/adminController");
const upload = require("../middleware/multer");
const adminAuth = require("../middleware/adminAuth");

router.post("/login", adminLogin);

router.post(
    "/addproduct",
    adminAuth,
    upload.array("images", 5),
    addProduct
);

module.exports = router;
