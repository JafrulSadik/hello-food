const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    productCode: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
    },
    _category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories"
    },
    description: {
        type: String,
    },
    productUrl:{
        type: String,
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    discount: {
        type: Number,
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        required: true
    }
}, {timestamps: true}
);



module.exports = mongoose.model("products", ProductSchema);

