const Order = require('../models/order');

class orderController{

    constructor(){
    }

    async indexAll() {
        return Order.find().limit(10);
    }

    async store(order) {
        return Order.create(order);
    }

    async update(id, order) {    
        return Order.findByIdAndUpdate(id, order);
    }

    async destroy(id) {
        return Order.findByIdAndRemove(id);
    }
}

let orderController = new orderController();
module.exports = orderController;