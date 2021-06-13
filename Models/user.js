const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
  identifier: { type: String, required: true, unique: true },
  local: {
    firstName: { type: String, required: true, unique: true },
    lastName: { type: String, required: true, unique: true },
    email: { type: String, unique: true, required: true },
    phone: { type: Number, required: true },
    api_token: { type: String },
    password: { type: String, required: true },
    //referralCode: { type: String},
    //userRole: { type: String, default: "SUBSCRIBER" },
  },


},
  { timestamps: true });

module.exports = mongoose.model('user', userSchema);