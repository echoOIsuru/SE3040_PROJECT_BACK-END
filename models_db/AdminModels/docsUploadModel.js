const mongoose = require('mongoose');
const { Schema } = mongoose;

const uploadDocsSchema = new Schema({
    document_name: {
        type: String,
        required: true,
    },
    submission_type:{
        type: String,
        required: true,
    },
    note:{
        type: String,
        required: true,
    },
    file_path:{
        type: String,
        required: true,
    },
    file_mimetype:{
        type: String,
        required: true,
    },
}
);

uploadDocsSchema.index({ document_name:1, submission_type:1 }, { unique: true });

<<<<<<< HEAD:Models/docsUploadModel.js
const UploadedDocuments = mongoose.model('upload_documents', uploadDocsSchema);
module.exports = UploadedDocuments;
=======
const uploadedDocuments = mongoose.model('upload_documents', uploadDocsSchema);
module.exports = uploadedDocuments;
>>>>>>> 4cee16b92252225f084de836defe01d424767b2f:models_db/AdminModels/docsUploadModel.js
