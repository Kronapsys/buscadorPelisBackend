const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

let orderSchema = mongoose.Schema({
  userId: {
    type: ObjectId,
    required: true,
  },
  filmId: {
    type: ObjectId,
    require: true,
  },
  rentalDate: {
    type: Date,
    required: true,
    default: new Date(),
  },
  // returnDate:{
  //     type: Date,
  //     required: true
  // }
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
