const createError = require("../error");
const User = require("../models/User");


const allUsers = async (req, res, next) =>{
    try{
        const users = await User.find()

        if(!users){
           return next(createError(204, "No users created yet!"))
        }

        res.status(200).send(users)

    } catch (err){
        next(err);
    }
}

module.exports = {
    allUsers
}