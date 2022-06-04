const mongoose = require('mongoose');

const AdminLoginSchema = mongoose.Schema({
    
     admin_username: {
        type: String,
        require: true,
        unique: true
    }, admin_password: {
        type: String,
        require: true
    }

})

const AdminLoginModel = mongoose.model('admin_login', AdminLoginSchema);
module.exports = AdminLoginModel;