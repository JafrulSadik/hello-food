const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const createError = require('../error');
const User = require("../models/User");

const signup = async (req, res, next) =>{
    try{
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({...req.body, "password" : hash})
        await newUser.save();

        res.status(200).send("User has been created!");

    } catch (err){
        next(err);
    }
}

const login = async (req, res, next) => {
    try{
        const user = await User.findOne({$or: [{email: req.body.input},{username:req.body.input}]});
        if(!user){
            return next(createError(404, "User name or Password does not matched."));
        }


        const isCorrect =  await bcrypt.compare(req.body.password, user.password);

        if(!isCorrect){
            return next(createError(404, "User name or Password does not matched."))
        } 

        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
        const {password, ...others} = user._doc;

        res.cookie("access_token", token,{
            httpOnly: true
        }).status(200).json(others)

    } catch (err){
        next(err);
    }
}

module.exports = {
    signup,
    login
}