const AdminModel = require("../models/adminModel");
const ProductModel = require("../models/productModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ================= ADMIN LOGIN =================
const adminLogin = async (req, res) => {
    try {
        const { adminid, password } = req.body;

        if (!adminid || !password) {
            return res.status(400).send({ msg: "All fields are required" });
        }

        const admin = await AdminModel.findOne({ adminid });

        if (!admin) {
            return res.status(401).send({ msg: "Invalid Admin ID" });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).send({ msg: "Invalid Password" });
        }

        const token = jwt.sign(
            { id: admin._id, role: "admin" },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        return res.status(200).send({
            msg: "Login Successfully!",
            token,
            admin: {
                _id: admin._id,
                name: admin.name,
                adminid: admin.adminid
            }
        });

    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: "Server Error" });
    }
};

// ================= ADD PRODUCT =================
const addProduct = async (req, res) => {
    try {
        const { name, price, category, description } = req.body;

        if (!name || !price) {
            return res.status(400).send({ msg: "Name & Price required" });
        }

        const images = req.files ? req.files.map(file => file.path) : [];

        const product = await ProductModel.create({
            name,
            price,
            category,
            description,
            images
        });

        res.status(201).send({
            msg: "Product Added Successfully",
            product
        });

    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: "Server Error" });
    }
};

module.exports = {
    adminLogin,
    addProduct
};
