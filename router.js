const router = require('express').Router();
const filmRouter = require('./routers/filmRouter');


router.use('/film',filmRouter);


module.exports = router;