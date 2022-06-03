const path = require('path');
const multer = require('multer');
const File = require('../../models_db/file');
const Router = require('express').Router();
const ObjectId = require('mongodb').ObjectID;

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './files');
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

Router.post(
  '/upload',
  upload.single('file'),
  async (req, res) => {
    try {
      const { title, email, status } = req.body;
      const { path, mimetype, filename } = req.file;
      const file = new File({
        title,
        status: "Pending",
        email,
        file_path: path,
        file_mimetype: mimetype
      });
      await file.save();
      res.send('file uploaded successfully.');
    } catch (error) {
      res.status(400).send('Error while uploading file. Try again later.');
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  }
);

Router.get('/getAllFiles', async (req, res) => {
  try {
    const files = await File.find({});
    const sortedByCreationDate = files.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    res.send(sortedByCreationDate);
  } catch (error) {
    res.status(400).send('Error while getting list of files. Try again later.');
  }
});

Router.get('/getFile/:id', async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    res.send(file);
  } catch (error) {
    res.status(400).send('Error while getting the file. Try again later.');
  }
});



Router.route("/get").get(async (req, res) => {
  console.log(req.cookies);
  let userId = req.cookies.uid;
  const user = await File.find({ email: userId }).then((user) => {

    res.status(200).send([user])
  })
})




Router.route('/update/:id').post((req, res) => {
  File.findById(req.params.id)
    .then(file => {
      file.title = req.body.title;
      file.email = req.body.email;
      file.save()
        .then(() => res.json('File updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

Router.get('/download/:id', async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    res.set({
      'Content-Type': file.file_mimetype
    });
    res.sendFile(path.join(__dirname, '..', file.file_path));
  } catch (error) {
    res.status(400).send('Error while downloading file. Try again later.');
  }
});

Router.delete('/file-delete/:id', async (req, res) => {
  try {
    File.findByIdAndDelete(req.params.id)
      .then(() => res.json('File deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  } catch (error) {
    res.status(400).send('File Deletion Failed');
  }
});

module.exports = Router;