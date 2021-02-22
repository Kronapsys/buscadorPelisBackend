const Film = require('../models/film');

class filmController{

    constructor(){
    }

    async indexAll() {
        return Film.find().limit(10);
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

let filmController = new filmController();
module.exports = filmController;