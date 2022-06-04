const path = require('path');
const multer = require('multer');
const uploadedDocuments = require('../../models_db/AdminModels/docsUploadModel');
const Router = require('express').Router();
const ObjectId = require('mongodb').ObjectID;

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './AdminUploadedDocs');
    },
    filename(req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`);
    }
  }),
  limits: {
    fileSize: 10000000 // max file size 10MB = 1000000 bytes
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls|ppt|pptx)$/)) {
      return cb(
        new Error(
          'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format.'
        )
      );
    }
    cb(undefined, true); // continue with upload
  }
});


Router.get('/getAllFiles', async (req, res) => {
  try {
    const files = await uploadedDocuments.find({});
    const sortedByCreationDate = files.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    res.send(sortedByCreationDate);
  } catch (error) {
    res.status(400).send('Error while getting list of files. Try again later.');
  }
});


Router.get('/download/:id', async (req, res) => {
  try {
    const file = await uploadedDocuments.findById(req.params.id);
    res.set({
      'Content-Type': file.file_mimetype
    });

    // console.log('aaaa',__dirname);

    res.sendFile(path.join(__dirname, '../../', file.file_path));
  } catch (error) {
    res.status(400).send('Error while downloading file. Try again later.');
  }
});



module.exports = Router;