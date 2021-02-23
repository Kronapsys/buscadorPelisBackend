const router = require('express').Router();
const orderController = require('../controllers/orderController');

router.get('/',async (req, res) => {   
    try{
        res.json(await orderController.indexAll())
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.post('/',async (req, res) => {
    try{
        const id = await orderController.store(req.body);
        const status = 'success';
        res.json({status,id});
    } catch( error ){
        return res.status(500).json({
            message: error.message
        });
    }
})

router.put('/:id',async (req,res) => {
    try{
        const id = req.params.id;
        res.json(await orderController.update(id,req.body));
    } catch( error ){
        return res.status(500).json({
            message: error.message
        });
    }
});

router.delete('/:id',async (req, res) => {
   try{
        const id = req.params.id;
        const status = 'deleted'
        await orderController.destroy(id);
        res.json({status,id});
   } catch( error ) {
    return res.status(500).json({
        message: error.message
    });   
   }

});

module.exports = router;