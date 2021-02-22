const router = require('express').Router();

const orderRouter = require('./routers/orderRouter');
const userRouter = require('./routers/userRouter');


router.use('/order',orderRouter);
router.use('/user',userRouter);


module.exports = router;