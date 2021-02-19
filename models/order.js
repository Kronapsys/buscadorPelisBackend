const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

let orderSchema = mongoose.Schema({
    id:{
        type: ObjectId,
        required: true
    },
    rentalDate:{
        type: Date,
        required: true
    },
    returnDate:{
        type: Date,
        required: true
    }
});


module.exports = mongoose.model('order', orderSchema );