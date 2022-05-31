const express = require('express');
var router = express.Router();
const path = require('path');

const {
    getSupervisor,
    getSupervisorById,
    updateSupervisor,
    deleteSupervisor
} = require('../controllers/AdminControllers/supervisorController')

const {
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
} = require('../controllers/AdminControllers/studentController')

const {
    getPanelMembers,
    getPanelMemberById,
    updatePanelMember,
    deletePanelMember
} = require('../controllers/AdminControllers/panelMemberController')

const {
    createAllocation,
    getAllocatedPanels,
    getAllocatedPanelByID,
    updateAllocatedPanel,
    getAllPanelMembers,
    getAllStudentGroups,
    deleteAllocatedPanel
} = require('../controllers/AdminControllers/panelAllocationController')

const { addDocument, uploadDocs } = require('../controllers/AdminControllers/docUploadController')

const { createMarkingScheme, uploadMarking } = require('../controllers/AdminControllers/markingSchemesController')

const { createTypes, getsubmissionTypes } = require('../controllers/AdminControllers/submissionTypesController')




const {
    test1,
    test2,
    test3,
    test4,
    test5,
    test6,
    test7,
    test8,
    test9,
    test10
} = require('../services/adminServices');


//services

/**
 * @method GET /
 * @description test case 1
 */
router.get('/', test1);

/**
 * @method GET /test2
 * @description test case 2
 */
router.get('/test2', test2);






//API

router.post("/create/markingScheme", uploadMarking.single('file'), createMarkingScheme);

router.post("/create/submissionTypes", createTypes);

router.post("/upload/documents", uploadDocs.single('file'), addDocument);


router.post("/create/panelAllocation", createAllocation);

router.get("/AllocatedPanels/all", getAllocatedPanels);

router.get("/AllocatedPanel/:id", getAllocatedPanelByID);

router.put("/AllocatedPanel/:id", updateAllocatedPanel);

router.delete("/AllocatedPanel/:id", deleteAllocatedPanel);


router.get("/submissionTypes/all", getsubmissionTypes);

router.get("/studentGroups/all", getAllStudentGroups);


router.get("/students/all", getStudents);

router.get("/students/:id", getStudentById);

router.put("/students/:id", updateStudent);

router.delete("/students/:id", deleteStudent);


router.get("/supervisor/all", getSupervisor);

router.get("/supervisor/:id", getSupervisorById);

router.put("/supervisor/:id", updateSupervisor);

router.delete("/supervisor/:id", deleteSupervisor);


router.get("/panelMembers/all", getAllPanelMembers);

router.get("/panelMembers/:id", getPanelMemberById);

router.put("/panelMembers/:id", updatePanelMember);

router.delete("/panelMembers/:id", deletePanelMember);





module.exports = router;