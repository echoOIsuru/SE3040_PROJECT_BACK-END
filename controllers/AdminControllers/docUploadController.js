const DocUploadModel = require("../../models_db/AdminModels/docsUploadModel.js");
const multer = require('multer');

//get the uploaded document from frontend and save in the directory
const uploadDocs = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './AdminUploadedDocs');
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

//addd document to database
const addDocument = async (req, res) => {

  try {
    const {
      document_name,
      submission_type,
      note
    } = req.body;

    const { path, mimetype } = req.file;

    const findDocument = await DocUploadModel.find({
      $and: [
        { document_name: document_name },
        { submission_type: submission_type }

      ]
    })

    if (findDocument.length > 0) {
      return res.status(409).json({ message: document_name + " and " + submission_type + " already exists in the System! Please Enter a Different One." });
    }

    const file = new DocUploadModel({
      document_name,
      submission_type,
      note,
      file_path: path,
      file_mimetype: mimetype
    });

    await file.save();
    res.status(201).json(file);

  } catch (error) {
    res.status(400).send('Error while uploading file. Try again later.');
  }

};


//export created controller functions
module.exports = {
  uploadDocs,
  addDocument,
}