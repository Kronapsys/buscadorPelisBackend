const Film = require('../models/film');
const bcrypt = require('bcryptjs');

class FilmController{

    constructor(){
    }

    async index(id) {
        return Film.findById(id).limit(10);
    }

    async store(film) {
        user.password = await bcrypt.hash(user.password, 6);
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