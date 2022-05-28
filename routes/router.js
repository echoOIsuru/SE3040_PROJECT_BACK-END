const express = require('express');
var router = express.Router();
const https = require('https');

const supervisorController = require('../controllers/supervisorController');


const supervisorServices = require('../services/supervisorService');

/**
 * @method GET /
 * @description test case 1
 */
router.get('/', supervisorServices.test1);

/**
 * @method GET /test2
 * @description test case 2
 */
router.get('/test2', supervisorServices.test2);
/**
 * 
 */
router.get('/supervisors/downloads', supervisorServices.downloadsMarking);



//API

//supervisor
router.post('/supervisors', supervisorController.create);
router.get('/supervisors', supervisorController.find);
router.put('/supervisors/:id', supervisorController.update);
router.post('/supervisors/:id', supervisorController.delete);

router.post('/supervisors-request-topic', supervisorController.requestTopic);

module.exports = router;