const express = require('express');
var router = express.Router();

const supervisorController = require('../controllers/supervisorController');
const panelMemberController = require('../controllers/panelMemberController');

const supervisorServices = require('../services/supervisorService');
const PanelMemberService = require('../services/PanelMemberService');

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
router.get('/topic-download', PanelMemberService.topicDownload);
router.get('/marking-download', PanelMemberService.markingDownload);


//API

//supervisor
router.post('/supervisor',supervisorController.create);
router.get('/supervisor',supervisorController.find);
router.put('/supervisor/:id',supervisorController.update);
router.post('/supervisor/:id',supervisorController.delete);

//Panel Member
router.post('/panel-member', panelMemberController.register);
router.post('/topic-feedback', panelMemberController.addTopicFeedback);
router.post('/final-ppt-feedback', panelMemberController.addFinalPptFeedback);
router.get('/panel/:id', panelMemberController.retrievePanel);
router.get('/group/:id', panelMemberController.retrieveGroup);
router.put('/evaluate-status/:id', panelMemberController.update);
router.delete('/rejected-group/:id', panelMemberController.delete);

router.post('/test',async(req,res)=>{
    console.log(res.body);
})

module.exports = router;