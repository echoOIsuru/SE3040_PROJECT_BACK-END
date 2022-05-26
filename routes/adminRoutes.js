const express = require('express');
var router = express.Router();
const path = require('path');

const {
    getStaff,
    getStaffById,
    updateStaff,
    deleteStaff
} = require('../controllers/AdminControllers/staffController')

const {
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
} = require('../controllers/AdminControllers/studentController')

const {addDocument,uploadDocs} = require('../controllers/AdminControllers/docUploadController')

const {createMarkingScheme,uploadMarking} = require('../controllers/AdminControllers/markingSchemesController')

const {createAllocation} = require('../controllers/AdminControllers/panelAllocationController')

const {createTypes,getsubmissionTypes} = require('../controllers/AdminControllers/submissionTypesController')

const supervisorController = require('../controllers/supervisorController');

const supervisorServices = require('../services/supervisorService');


//API

router.post("/create/markingScheme", uploadMarking.single('file'), createMarkingScheme);

router.post("/create/panelAllocation", createAllocation);

router.post("/create/submissionTypes", createTypes);

router.post("/upload/documents", uploadDocs.single('file'), addDocument);

router.get("/submissionTypes/all", getsubmissionTypes);

router.get("/students/all", getStudents);

router.get("/students/:id", getStudentById);

router.put("/students/:id", updateStudent);

router.delete("/students/:id", deleteStudent);

router.get("/staff/all", getStaff);

router.get("/staff/:id", getStaffById);

router.put("/staff/:id", updateStaff);

router.delete("/staff/:id", deleteStaff);



module.exports = router;