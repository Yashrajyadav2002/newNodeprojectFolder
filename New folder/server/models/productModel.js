const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    price: {
        type: Number,
        required: true
    },
    images: {
        type: [String],
        default: []
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.model("product", productSchema);
