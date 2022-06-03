const express = require('express');
var router = express.Router();
const https = require('https');

const supervisorController = require('../controllers/supervisorController');
const panelMemberController = require('../controllers/panelMemberController');

const supervisorServices = require('../services/supervisorService');
const PanelMemberService = require('../services/PanelMemberService');

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
router.get('/topic-download/:id', PanelMemberService.topicDownload);
router.get('/marking-download/:id', PanelMemberService.markingDownload);
router.get('/final-ppt-download/:id', PanelMemberService.finalPptDownload);
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

//Panel Member
router.post('/panel-member', panelMemberController.register);
router.post('/topic-feedback', panelMemberController.addTopicFeedback);
router.post('/final-ppt-feedback', panelMemberController.addFinalPptFeedback);
router.get('/panel/:id', panelMemberController.retrievePanel);
router.get('/group/:id', panelMemberController.retrieveGroup);
router.put('/evaluate-status/:id', panelMemberController.update);
router.delete('/rejected-group/:id', panelMemberController.delete);
router.post('/panel-member-login', panelMemberController.validatePanelMemberLogin);

router.post('/test',async(req,res)=>{
    console.log(res.body);
})

module.exports = router;