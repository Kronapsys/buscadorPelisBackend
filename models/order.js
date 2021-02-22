const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

let orderSchema = mongoose.Schema({
    id:{
        type: ObjectId,
        required: true
    },
    userId:{
        type: ObjectId,
        required: true,
    },
    filmTitle:{
        type: String,
        require: true
    },
    rentalDate:{
        type: Date,
        required: true,
        default: new Date
    },
    returnDate:{
        type: Date,
        required: true
    }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;