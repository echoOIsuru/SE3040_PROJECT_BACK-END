const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true,
        unique : true
    },
    phone : {
        type : String,
        require : true
    },
    research : {
        type : String,
        require : true
    },
    username : {
        type : String,
        require : true,
        unique : true
    },
    password : {
        type : String,
        require : true
    }
})

const PanelMemberModel = mongoose.model('PanelMember', schema);
module.exports = PanelMemberModel;
