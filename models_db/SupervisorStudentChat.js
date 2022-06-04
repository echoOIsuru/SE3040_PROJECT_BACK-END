const mongoose = require("mongoose")

const schema = mongoose.Schema({
    group_id: {
        type: String,
        require: true
    },
    supervisor_id: {
        type: String,
        require: true
    },
    data: {
        type: Array,
        require: true
    },
    group_data: {
        type: Object,
        require: true
    }
})

const ChatModel = mongoose.model("SupervisorChats", schema);
module.exports = ChatModel