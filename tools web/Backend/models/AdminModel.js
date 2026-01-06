const mongoose = require("mongoose");
const AdminSchema = new mongoose.Schema({
    adminEmail:String,
    adminPassword:String
});

module.exports = mongoose.model("admin",AdminSchema);

