const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
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
        require : true
    },
    password : {
        type : String,
        require : true
    }
})

const PanelMemberModel = mongoose.model('PanelMember', schema);
module.exports = PanelMemberModel;