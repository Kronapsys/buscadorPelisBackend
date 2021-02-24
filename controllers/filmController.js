const Film = require("../models/film");

class FilmController {
  constructor() {}

  async index(id) {
    return Film.findById(id);
  }

  async store(film) {
    return Film.create(film);
  }

  async update(id, film) {
    return Film.findByIdAndUpdate(id, film);
  }

  async destroy(id) {
    return Film.findByIdAndRemove(id);
  }
}

let filmController = new FilmController();
module.exports = filmController;
