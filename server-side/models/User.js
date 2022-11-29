const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
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
    order: {
        type: Array,
    }
}, {timestamps: true}
);


module.exports = mongoose.model("User", UserSchema);

