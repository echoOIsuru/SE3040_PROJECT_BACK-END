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
router.post('/supervisors-validate', supervisorController.validateSupervisor);
router.get('/supervisors-field/:field', supervisorController.findSupervisorByField);

router.post('/supervisors-request-topic', supervisorController.requestTopic);
router.get('/supervisors-topic-requests/:id', supervisorController.findTopicRequestBySupervisorID)
router.patch('/supervisors-requests-status', supervisorController.setStatusForTopicRequest)

router.post('/supervisors-chat-service', supervisorController.createChat);
router.patch('/supervisors-chat-service', supervisorController.putChatsInToGroupChat);
router.get('/supervisors-chat-view/:id', supervisorController.viewChatBySupervisorId);
router.get('/supervisors-chat-view-group/:id', supervisorController.viewChatByGroupId);
//end


module.exports = router;