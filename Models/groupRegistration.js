const mongoose = require("mongoose"); 

const Schema = mongoose.Schema;

const groupregistrationSchema = new Schema({

group_name : {
     type : String,
     required:true

},
leader : {
    type : String,
    required:true

},

email : {
    type : String,
    required:true

},

member1 : {
    type : String,
    required:true

},

member2 : {
    type : String,
    required:true

},

member3 : {
    type : String,
    required:true

},

leader_nic : {
    type : String,
    required:true

},

member1_nic : {
    type : String,
    required:true

},

member2_nic : {
    type : String,
    required:true

},

member3_nic : {
    type : String,
    required:true

},

})


const Group = mongoose.model("group_registration",groupregistrationSchema);




module.exports = Group;