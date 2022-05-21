const express = require('express');
var router = express.Router();
const multer = require('multer');
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

const {addDocument} = require('../controllers/AdminControllers/docUploadController')

const {createMarkingScheme} = require('../controllers/AdminControllers/markingSchemesController')

const {createAllocation} = require('../controllers/AdminControllers/panelAllocationController')

const {createTypes} = require('../controllers/AdminControllers/submissionTypesController')

const supervisorController = require('../controllers/supervisorController');

const supervisorServices = require('../services/supervisorService');


const upload = multer({
    storage: multer.diskStorage({
      destination(req, file, cb) {
        cb(null, './AdminFiles');
      },
      filename(req, file, cb) {
        cb(null, `${new Date().getTime()}_${file.originalname}`);
      }
    }),
    //limt the file maximum size to 10mb
    limits: {
      fileSize: 10000000 
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls|ppt|pptx)$/)) {
        return cb(
          new Error(
            'Files only with jpg, jpeg, png, pdf, doc, docx, xslx, xls formatcan be uploaded'
          )
        );
      }
      cb(undefined, true); // continue with upload
    }
  });


//API

router.post("/create/markingScheme", createMarkingScheme);

router.post("/create/panelAllocation", createAllocation);

router.post("/create/submissionTypes", createTypes);

router.post("/upload/documents", upload.single('file') ,addDocument);

router.get("/students/all", getStudents);

router.get("/students/:id", getStudentById);

router.put("/students/:id", updateStudent);

router.delete("/students/:id", deleteStudent);

router.get("/staff/all", getStaff);

router.get("/staff/:id", getStaffById);

router.put("/staff/:id", updateStaff);

router.delete("/staff/:id", deleteStaff);



module.exports = router;