const mongoose = require('mongoose');

const schema = mongoose.Schema({
    groupId : {
        type : String,
        require : true
    },
    status : {
        type : String,
        require : true
    },
    feedbacks : {
        type : String,
        require : true
    }
})

const TopicEvaluateModel = mongoose.model('Topic-Evaluate', schema);
module.exports = TopicEvaluateModel;