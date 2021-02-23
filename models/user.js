const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

let userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    dni:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    }
});   
      
const User = mongoose.model('User', userSchema);
module.exports = User;