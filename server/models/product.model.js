const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "Product title is required."],
        minlength: [2, "Product title must be at least 2 characters."],
        maxlength: [100, "Product title cannot be more than 100 characters."]
    },
    price: { 
        type: Number,
        required: [true, "This product must have a price listed."],
    },
    description: { 
        type: String,
        required: [true, "Please include a brief description of this product"],
    }
}, { timestamps: true });

module.exports.Product = mongoose.model("Product", ProductSchema);
