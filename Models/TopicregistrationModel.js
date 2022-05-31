const mongoose = require("mongoose"); 

const Schema = mongoose.Schema;

const topicregistrationSchema = new Schema({

topic : {
     type : String,
     required:true

},
nic : {
    type : String,
    required:true

},

email :{

    type : String,
    required:true

},


})


const Topic = mongoose.model("topic_registration",topicregistrationSchema);




module.exports = Topic;