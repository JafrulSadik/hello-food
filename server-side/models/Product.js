const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    productCode: {
        type: String,
        required: true,
        unique: true,
    },
    productName: {
        type: String,
        required: true,
    },
    productDesc: {
        type: String,
        required: true,
    },
    catagroy: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: double,
        required: true,
    },
    discount: {
        type: String,
    },
}, {timestamps: true}
);


module.exports = mongoose.model("User", UserSchema);

