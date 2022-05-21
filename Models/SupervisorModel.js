const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    data: {
        type: String,
        require: true
    }
})

const SupervisorModel = mongoose.model('Supervisor', schema);
module.exports = SupervisorModel;