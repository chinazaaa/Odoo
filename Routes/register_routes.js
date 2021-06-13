// const express = require('express');
// const RegisterController = require('../Controllers/register.controller');
// const router = express.Router();
// const { body } = require("express-validator");

// //User registration route
// router.post('/user',[
//        body("phone").isInt().withMessage("Phone number must be a number"),
//         body("password").exists().isLength({ min: 8, max:25 }).withMessage("Password must be between 8 to 25 characters long"),
//         body("userName").escape().isLength({ min: 4, max: 25 }).withMessage("userName must be between 4 to 25 characters long"),
//         body("email").exists().trim().isEmail().withMessage("Email must be valid")
// ],  RegisterController.registerSalon)

// module.exports = router;

