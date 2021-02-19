const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

let userSchema = mongoose.Schema({
    id:{
        type: ObjectId,
        required: true
    },
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
        required: true
    },
    password:{
        type: password,
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
      
module.exports = mongoose.model('user', userSchema );
