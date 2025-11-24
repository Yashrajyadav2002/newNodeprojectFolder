

const mongoose = require("mongoose");
const cookieSchema = new mongoose.Schema({
    username:String,
    Password:String,
});

module.exports=new mongoose.model("cookie",cookieSchema);
