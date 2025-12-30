const ProductModel = require("../models/productModel");
const multer = require("multer");
const path = require("path");

// Storage config for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // make sure this folder exists
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Add Product controller
const addProduct = async (req, res) => {
    try {
        // req.body has name, category, description, price
        // req.files has uploaded images
        const imagePaths = req.files.map(file => file.path);

        const product = await ProductModel.create({
            name: req.body.name,
            category: req.body.category,
            description: req.body.description,
            price: req.body.price,
            images: imagePaths
        });

        res.status(201).send({ msg: "Product added successfully", product });
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: "Server error" });
    }
};

module.exports = { addProduct, upload };
