const express = require("express");
const authRoute = require("./routes/auth");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();
const bcrypt = require('bcrypt');


const PORT = process.env.PORT || 5000;


const connect = () => {
    mongoose.connect(process.env.MONGO_URL,(req, res) => {
        console.log("DB connection successfull!");
    }).catch((err) => {
        throw err;
    })
}


app.use(express.json());
app.use("/api/", authRoute);


app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
        success: false,
        status,
        message
    })
})

app.listen(PORT, (req,res) =>{
    connect();
    console.log(`Server is listening on port ${PORT}`);
})