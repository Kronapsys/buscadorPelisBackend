const mongoose = require("mongoose");

let filmSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: false,
  },
});

const Film = mongoose.model("Film", filmSchema);
module.exports = Film;
