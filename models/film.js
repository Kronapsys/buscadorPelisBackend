const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

let filmSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: false
    }
});

const Film = mongoose.model('Film', filmSchema);
module.exports = Film;