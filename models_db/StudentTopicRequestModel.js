const mongoose = require('mongoose')

const schema = mongoose.Schema({
    field: {
        type: String,
        require: true
    },
    student_email: {
        type: String,
        require: true,
        unique: true,
    },
    student_mobile: {
        type: String,
        require: true
    },
    student_name: {
        type: String,
        require: true
    },
    supervisor: {
        type: Object,
        require: true
    },
    topic: {
        type: String,
        require: true
    },
    topic_details: {
        type: String,
        require: true
    },
    s_status: {
        type: String,
        require: true
    },
    s_group: {
        type: Object,
        require: true
    }
})

const StudentTopicRequestModel = mongoose.model("student_topic_request", schema);
module.exports = StudentTopicRequestModel;