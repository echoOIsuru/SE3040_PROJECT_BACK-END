const https = require('https');
const Files = require('../models_db/file');
const Marking = require('../models_db/AdminModels/markingSchemesModel');
const Submissions = require('../models_db/submition');
const path = require('path');

// Download topic document submission
exports.topicDownload = async(req, res) =>{
    // const url = "https://scholar.harvard.edu/files/tnkomo/files/analysis_of_toyota.pdf"
    // https.get(url, (fileStream) => {
    //     fileStream.pipe(res)
    // })

    try {
        const file = await Files.findById(req.params.id);
        res.set({
            'Content-Type': file.file_mimetype
        });
        res.sendFile(path.join(__dirname, '..', file.file_path));
    } catch (error) {
        res.status(400).send('Error while downloading file. Try again later.');
    }

}

// Download marking sheme
exports.markingDownload = async(req, res) =>{

    try {
        const file = await Files.findById(req.params.id);
        res.set({
            'Content-Type': file.file_mimetype
        });
        res.sendFile(path.join(__dirname, '..', file.file_path));
    } catch (error) {
        res.status(400).send('Error while downloading file. Try again later.');
    }

}

// Download final presentation
exports.finalPptDownload = async(req, res) =>{

    try {
        const file = await Submissions.findById(req.params.id);
        res.set({
            'Content-Type': file.file_mimetype
        });
        res.sendFile(path.join(__dirname, '..', file.file_path));
    } catch (error) {
        res.status(400).send('Error while downloading file. Try again later.');
    }

}