const mongoose = require('mongoose');

const schema = mongoose.Schema({
    s_name: {
        type: String,
        require: true
    }, s_mobile: {
        type: String,
        require: true
    }, s_email: {
        type: String,
        require: true,
        unique: true
    }, password: {
        type: String,
        require: true
    }, fields: {
        type: Array,
        require: true
    }

})

const SupervisorModel = mongoose.model('Supervisor', schema);
module.exports = SupervisorModel;