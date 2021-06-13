// const bCrypt = require("bcryptjs");
// //const response = require("../Utils/response");
// //const random = require("../Utils/random");
// const { body, validationResult } = require("express-validator");
// const User = require("../Models/user");

// //  Register User  
// module.exports.registerUser = async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(422).json({ errors: errors.array().map((v) => v.msg) });
//   }
//   console.log(errors.array());
//   let {
//     password,
//     phone,
//     firstName,
//     lastName,
//     referralcode,
//     email: identifier,
//     userRole = "SUBSCRIBER",
//   } = req.body;

//   try {
//     //  Duplicate check
//     let user = await User.findOne({ identifier });

//     let dup_username = await User.findOne({
//       "local.userName": userName,
//     });

//     if (user) {
//       return response.errorResMsg(
//         res,
//         false,
//         409,
//         "Email already taken, please use another email",
//         "User already" + " exists"
//       );
//     } else if (dup_username) {
//       return response.errorResMsg(
//         res,
//         false,
//         409,
//         "Username already taken, please choose another username",
//         "Username already" + " exists"
//       );
//     }

//     password = await bCrypt.hash(password, 10);
 
   
//       user = await User.create({
//         identifier,
//         local: {
//             password,
//             phone,
//             firstName,
//             lastName,
//             referralcode,
//             email: identifier,
//         },
//       });
//       console.log("About to sign token");

    

//       user = await user.save();

//       console.log("User has been saved");
//       // response.successResMsg(res, true, 'User Registered Successfully', 201, user);
//     } 
//     catch (e) {
//         console.log(e);
//         console.log("It seems an error occurred");
//         /*
//          *report all possible error exceptions here
//          * 1 -- 50x errors
//          * 2 -- Email failed exceptions
//          */
//       }
// };
