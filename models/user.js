const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  dni: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
