const express = require("express");
const {verifyToken} = require("../controllers/tokenValidation");
const { test, allUsers } = require("../controllers/user");


const router = express.Router();

router.get('/allUsers', allUsers);

module.exports = router;