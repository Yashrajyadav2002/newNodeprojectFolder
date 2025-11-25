

const mongoose = require("mongoose");
const cookieSchema = new mongoose.Schema({
    username:String,
    password:String,
});

module.exports= mongoose.model("cookie",cookieSchema);
