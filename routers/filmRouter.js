const router = require('express').Router();
const filmController = require('../controllers/film');

router.get('/',async (req, res) => {   
    try{
        res.json(await filmController.indexAll())
    } catch (error) {
        return res.sendStatus(500).json({
            message: 'Server Error'
        });
    }
});

router.post('/',async (req, res) => {
    try{
        const id = await filmController.store(req.body);
        const status = 'success';
        res.json({status,id});
    } catch( error ){
        return res.sendStatus(500).json({
            message: 'Server Error'
        });
    }
})

router.put('/:id',async (req,res) => {
    try{
        const id = req.params.id;
        res.json(await filmController.update(id,req.body));
    } catch( error ){
        return res.sendStatus(500).json({
            message: 'Server Error'
        });
    }
});

router.delete('/:id',async (req, res) => {
   try{
        const id = req.params.id;
        const status = 'deleted'
        await filmController.destroy(id);
        res.json({status,id});
   } catch( error ) {
    return res.sendStatus(500).json({
        message: 'Server Error'
    });   
   }

});



module.exports = router;