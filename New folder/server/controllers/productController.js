const ProductModel = require("../models/productModel");
const UserModel = require("../models/userModel");

const brandDisplay = async (req, res) => {
    try {
        const product = await ProductModel.find();
        res.send(product);
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: "Server error" });
    }
}

const userRegistration = async (req, res) => {
    try {
        const { name, email, password, contact, city, shippingadd, pincode } = req.body;
        await UserModel.create({
            name,
            email,
            password,
            contact,
            city,
            shippingadd,
            pincode
        });
        res.send("User Created!!!");
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: "Server error" });
    }
}

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(401).send({ msg: "Invalid Email Id!" });
        }

        if (user.password != password) {
            return res.status(401).send({ msg: "Invalid Password!" });
        }

        res.status(200).send({ user: user, msg: "You are Successfully Login!!!" });
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: "Server error" });
    }
}

module.exports = {
    brandDisplay,
    userRegistration,
    userLogin
}
