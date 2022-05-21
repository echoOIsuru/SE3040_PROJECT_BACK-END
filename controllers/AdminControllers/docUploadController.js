const DocUploadModel = require("../../Models/AdminModels/docsUploadModel.js");
const multer = require('multer');
const path = require('path');

const addDocument = async (req, res) => {

    try {
        const {
            document_ID,
            documentName,
            note
        } = req.body;

        const {file_path,file_mimetype} = req.file;

        const findDocument = await  DocUploadModel.find({
            $and: [
                { document_ID:document_ID }
            ]
        })

        if (findDocument.length > 0) {
            return res.status(409).json({ message: document_ID + " already exists in the System! Please Enter a Different One." });
        }

        const doc = new  DocUploadModel({
            document_ID,
            documentName,
            note,
            file_path,
            file_mimetype
        });

        await doc.save();
        res.status(201).json(doc);

    } catch (error) {
        res.status(400).json(error);
    }

};



module.exports = {
    addDocument,
}