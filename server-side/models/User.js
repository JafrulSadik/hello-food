const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    img: {
        type: String,
    },
    orders: {
        type: Array,
    },
    isAdmin: {
        type: Boolean,
        default: 0
    },
    addToCart:{
        type: Array
    }
}, {timestamps: true}
);


module.exports = mongoose.model("User", UserSchema);

