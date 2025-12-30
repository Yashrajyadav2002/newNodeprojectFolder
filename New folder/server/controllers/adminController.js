const AdminModel = require("../models/adminModel");

const adminLogin = async (req, res) => {
    try {
        const { adminid, password } = req.body;

        const admin = await AdminModel.findOne({ adminid });

        if (!admin) {
            return res.status(401).send({ msg: "Invalid Admin ID" });
        }

        if (admin.password != password) {
            return res.status(401).send({ msg: "Invalid Password" });
        }

        // Send admin data so frontend can use it
        return res.status(200).send({
            msg: "Login Successfully!",
            admin: {
                _id: admin._id,
                name: admin.name,
                adminid: admin.adminid
            }
        });

    } catch (err) {
        console.log(err);
        return res.status(500).send({ msg: "Server Error" });
    }
};

const addProduct = async (req, res) => {
    console.log(req.body);
    res.send("OKKK");
}

module.exports = {
    adminLogin,
    addProduct
}
