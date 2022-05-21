const mongoose = require('mongoose');
const { Schema } = mongoose;

const uploadDocsSchema = new Schema({
    document_ID: {
        type: String,
        required: true,
        unique:true
    },
    documentName: {
        type: String,
        required: true
    },
    // regNo: {
    //     type: String,
    //     required: true
    // },
    note: {
        type: Number,
    },
    file_path: {
        type: String,
        required: true,
    },
    file_mimetype: {
        type: String,
        required: true,
    },
});

const UploadedDocuments = mongoose.model('uploaded_documents', uploadDocsSchema);
module.exports = UploadedDocuments;