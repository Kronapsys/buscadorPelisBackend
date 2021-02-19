const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

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
        type: Number,
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