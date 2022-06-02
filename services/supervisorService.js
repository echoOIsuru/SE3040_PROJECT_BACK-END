const https = require('https');
const fs = require('fs');
const path = require('path');
const Document_Submition = require('../models/documentSubmition');


exports.test1 = async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('TEST CASE 1');
    res.end();
}

exports.test2 = async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('TEST CASE 2');
    res.end();
}

exports.downloadsMarking = async (req, res) => {
    // const url = path.join(__dirname, '../AdminUploadedDocs/1653628504081_1703.00800.pdf')
    // https.get(url, (fileStream) => {
    //     fileStream.pipe(res)
    // })
    try {
        const file = await Document_Submition.findById(req.params.id);
        res.set({
            'Content-Type': file.file_mimetype
        });
        res.sendFile(path.join(__dirname, '..', file.file_path));
    } catch (error) {
        res.status(400).send('Error while downloading file. Try again later.');
    }

}