const mongoose = require('mongoose');

const TestSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

const Test = mongoose.model('tests', TestSchema)
module.exports = Test;