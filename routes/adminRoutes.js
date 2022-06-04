const express = require('express');
var router = express.Router();
const path = require('path');

//all controllers related to manage supervisors
const {
    getSupervisor,
    getSupervisorById,
    updateSupervisor,
    deleteSupervisor
} = require('../controllers/AdminControllers/supervisorAdminController')

//all controllers related to manage students
const {
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
} = require('../controllers/AdminControllers/studentController')

//all controllers related to manage panel members
const {
    getPanelMemberById,
    updatePanelMember,
    deletePanelMember
} = require('../controllers/AdminControllers/AdminpanelMemberController')

//all controllers related to manage allocation of panels
const {
    createAllocation,
    getAllocatedPanels,
    getAllocatedPanelByID,
    updateAllocatedPanel,
    getAllPanelMembers,
    getAllStudentGroups,
    deleteAllocatedPanel
} = require('../controllers/AdminControllers/panelAllocationController')

//document/template controller
const { addDocument, uploadDocs } = require('../controllers/AdminControllers/docUploadController')

//marking scheme creation controller
const { createMarkingScheme, uploadMarking } = require('../controllers/AdminControllers/markingSchemesController')

//all controllers related to manage submission types
const {
    createTypes,
    getsubmissionTypes,
    getsubmissionTypesById,
    updatesubmissionTypes,
    deleteSubmissionTypes
} = require('../controllers/AdminControllers/submissionTypesController')

//controller related to admin login validation
const { validateAdminLogin } = require('../controllers/AdminControllers/AdminLoginController')



//API

//admin login validation
router.post('/login/validate', validateAdminLogin);

//create marking scheme
router.post("/create/markingScheme", uploadMarking.single('file'), createMarkingScheme);

//upload document/template
router.post("/upload/documents", uploadDocs.single('file'), addDocument);



//create submission type
router.post("/create/submissionTypes", createTypes);

//get all submission types
router.get("/submissionTypes/all", getsubmissionTypes);

//get submission type by id
router.get("/submissionTypes/:id", getsubmissionTypesById);

//update submission type
router.put("/submissionTypes/:id", updatesubmissionTypes);

//delete submission type
router.delete("/submissionTypes/:id", deleteSubmissionTypes);



//create panel allocation
router.post("/create/panelAllocation", createAllocation);

//get all allocated panels
router.get("/AllocatedPanels/all", getAllocatedPanels);

//get allocated panel by id
router.get("/AllocatedPanel/:id", getAllocatedPanelByID);

//update allocated panel
router.put("/AllocatedPanel/:id", updateAllocatedPanel);

//delete allocated panel
router.delete("/AllocatedPanel/:id", deleteAllocatedPanel);


// router.get("/submissionTypes/all", getsubmissionTypes);

//get all student groups
router.get("/studentGroups/all", getAllStudentGroups);

//get all students
router.get("/students/all", getStudents);

//get students by id
router.get("/students/:id", getStudentById);

//update student
router.put("/students/:id", updateStudent);

//delete student
router.delete("/students/:id", deleteStudent);


//get all supervisors
router.get("/supervisor/all", getSupervisor);

//get supervisors by id
router.get("/supervisor/:id", getSupervisorById);

//update supervisor
router.put("/supervisor/:id", updateSupervisor);

//delete supervisor
router.delete("/supervisor/:id", deleteSupervisor);



//get all panel members
router.get("/panelMembers/all", getAllPanelMembers);

//get panel members by id
router.get("/panelMembers/:id", getPanelMemberById);

//update panel member
router.put("/panelMembers/:id", updatePanelMember);

//delete panel member
router.delete("/panelMembers/:id", deletePanelMember);


module.exports = router;