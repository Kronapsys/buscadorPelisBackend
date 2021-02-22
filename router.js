const router = require('express').Router();

const filmRouter = require('./routers/filmRouter');
const orderRouter = require('./routers/orderRouter');
const userRouter = require('./routers/userRouter');


router.use('/film', filmRouter);
router.use('/order', orderRouter);
router.use('/user', userRouter);


module.exports = router;