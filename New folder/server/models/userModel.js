const mongoose = require("mongoose");
const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    contact:String,
    city:String,
    shippingadd:String,
    pincode:Number,
    alternateaddress:String
})

module.exports = mongoose.model("user", userSchema);