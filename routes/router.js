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
 * supervisor downloadings
 */
router.get('/supervisors/downloads/:id', supervisorServices.downloadsGroupSubmission);
router.get('/supervisors/marking-downloads', supervisorServices.downloadsMarking)


//API

//supervisor
router.post('/supervisors', supervisorController.create);
router.get('/supervisors/:id', supervisorController.find);
router.post('/supervisors-validate', supervisorController.validateSupervisor);
router.get('/supervisors-field/:field', supervisorController.findSupervisorByField);

router.delete('/supervisors-request-topic/:id', supervisorController.delete);
router.post('/supervisors-request-topic', supervisorController.requestTopic);
router.get('/supervisors-topic-requests/:id', supervisorController.findTopicRequestBySupervisorID)
router.patch('/supervisors-requests-status', supervisorController.setStatusForTopicRequest)
router.get('/supervisors-topic-by-group/:id', supervisorController.findTopicRequestByGroupId)
router.get('/supervisors-topic-by-gname/:id', supervisorController.findTopicRequestByGroupName)

router.post('/supervisors-chat-service', supervisorController.createChat);
router.patch('/supervisors-chat-service', supervisorController.putChatsInToGroupChat);
router.get('/supervisors-chat-view/:id', supervisorController.viewChatBySupervisorId);
router.get('/supervisors-chat-view-group/:id', supervisorController.viewChatByGroupId);

router.get('/supervisors-all-groups', supervisorController.getAllGroups);
router.get('/supervisors-student-nic/:id', supervisorController.getGroupByStudentNIC)

router.get('/supervisors-documet-submissions', supervisorController.getAllDocumentSubmissions)

router.post('/supervisors-feedback', supervisorController.createSupervisorFeedback);
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

router.post('/test', async (req, res) => {
    console.log(res.body);
})

module.exports = router;