const mongoose = require('mongoose');

const schema = mongoose.Schema({
    feedback: {
        type: String,
        require: true
    },
    supervisor_id: {
        type: String,
        require: true
    },
    group_name: {
        type: String,
        require: true
    },
    student_email: {
        type: String,
        require: true
    },
    topic_name: {
        type: String,
        require: true
    },
    field: {
        type: String,
        require: true
    }

})

const SupervisorFeedback = mongoose.model('SupervisorFeedbacks', schema);
module.exports = SupervisorFeedback;