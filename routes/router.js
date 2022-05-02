const express = require('express');
var router = express.Router();

const supervisorController = require('../controllers/supervisorController');


const supervisorServices = require('../services/supervisorService');

/**
 * @method GET /
 * @description test case 1
 */
router.get('/',supervisorServices.test1);

/**
 * @method GET /test2
 * @description test case 2
 */
router.get('/test2', supervisorServices.test2);


//API

//supervisor
router.post('/supervisor',supervisorController.create);
router.get('/supervisor',supervisorController.find);
router.put('/supervisor/:id',supervisorController.update);
router.post('/supervisor/:id',supervisorController.delete);

router.post('/test',async(req,res)=>{
    console.log(res.body);
})

module.exports = router;