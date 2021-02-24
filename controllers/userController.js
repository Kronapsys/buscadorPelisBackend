const User = require("../models/user");
const bcrypt = require("bcryptjs");

class UserController {
  constructor() {}

  async index(id) {
    return User.findById(id).limit(10);
  }

  async store(user) {
    user.password = await bcrypt.hash(user.password, 6);
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
