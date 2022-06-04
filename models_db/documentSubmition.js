const mongoose = require('mongoose');

const DSubmitionSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        file_path: {
            type: String,
            required: true
        },
        file_mimetype: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Document_Submition = mongoose.model('Document_Submition', DSubmitionSchema);

module.exports = Document_Submition;