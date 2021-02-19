const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let filmSchema = mongoose.Schema({
    id:{
        type: ObjectId,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    year:{
        type: Integer,
        required: false
    },
    overview:{
        type: String,
        required: false
    },
    image:{
        type: Image,
        required: false
    },
    genre:{
        type: String,
        required: false
    }
});

module.exports = mongoose.model('film', filmSchema );