const mongoose = require('mongoose');
const { Schema } = mongoose;

const submissionTypesSchema = new Schema({
    submission_type: {
        type: String,
        required: true,
        trim: true,
        unique:true
      },
      submission_description: {
        type: String,
        required: true,
        trim: true,
      },
      submission_deadline: {
        type: Date,
        required: true
      },
    });

const SubmissionTypes = mongoose.model('submission_types', submissionTypesSchema);
module.exports = SubmissionTypes;