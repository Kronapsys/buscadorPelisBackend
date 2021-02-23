const User = require('../models/user');

class UserController{

    constructor(){
    }

    async indexAll() {
        return User.find().limit(10);
    }

    async store(user) {
        return User.create(user);
    }

    async update(id, user) {    
        return User.findByIdAndUpdate(id, user);
    }

    async destroy(id) {
        return User.findByIdAndRemove(id);
    }
}

let userController = new UserController();
module.exports = userController;