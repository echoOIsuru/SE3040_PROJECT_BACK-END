const mongoose = require('mongoose');
const { Schema } = mongoose;

const MarkingSchema = new Schema({
    scheme_ID: {
        type: String,
        required: true,
        unique:true
    },
    scheme_name: {
        type: String,
        required: true
    },
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

const MarkingScheme = mongoose.model('marking_schemes', MarkingSchema);
module.exports = MarkingScheme;