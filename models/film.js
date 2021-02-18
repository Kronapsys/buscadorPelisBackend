class Film{

    constructor(id, title, year, description, image, genre, adult){
        this.id = id;
        this.title = title;
        this.year = year;
        this.description = description;
        this.image = image;
        this.genre = genre;
        this.adult = adult;
    }
}

module.exports = Film;