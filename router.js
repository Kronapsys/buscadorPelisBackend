const router = require("express").Router();

const filmRouter = require("./routers/filmRouter");
const orderRouter = require("./routers/orderRouter");
const userRouter = require("./routers/userRouter");

router.use("/films", filmRouter);
router.use("/orders", orderRouter);
router.use("/users", userRouter);

module.exports = router;
