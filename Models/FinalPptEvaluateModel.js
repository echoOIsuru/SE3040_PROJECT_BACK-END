const mongoose = require('mongoose');

const schema = mongoose.Schema({
    groupId : {
        type : String,
        require : true
    },
    feedbacks : {
        type : String,
        require : true
    }
})

const FinalPptEvaluateModel = mongoose.model('Final-Ppt-Evaluate', schema);
module.exports = FinalPptEvaluateModel;