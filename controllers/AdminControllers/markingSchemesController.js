const MarkingModel = require("../../Models/AdminModels/markingSchemesModel.js");
const multer = require('multer');

const uploadMarking = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './AdminMarkingSchemes');
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

const createMarkingScheme = async (req, res) => {

    try {
        const {
            scheme_name,
            submission_type,
            note
        } = req.body;

        const{ path, mimetype } = req.file;

        const findMarkingScheme = await MarkingModel.find({
            $and: [
                { scheme_name:scheme_name },
                { submission_type:submission_type }
            ]
        })

        if (findMarkingScheme.length > 0) {
            return res.status(409).json({ message: scheme_name +" and "+ submission_type + " already exists in the System! Please Enter a Different One." });
        }

        const doc = new  MarkingModel({
            scheme_name,
            submission_type,
            note,
            file_path:path,
            file_mimetype:mimetype
        });

        await doc.save();
        res.status(201).json(doc);

    } catch (error) {
        res.status(400).json(error);
    }

};


module.exports = {
    createMarkingScheme,
    uploadMarking
}