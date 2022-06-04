const StudentTopicRequestModel = require('../models/StudentTopicRequestModel');
const  SupervisorModel = require('../Models/SupervisorModel');
const ChatModel = require('../models/SupervisorStudentChat');


//create new record
exports.create = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" })
        return;
    }

    const record = new SupervisorModel({
        s_name: req.body.s_name,
        s_mobile: req.body.s_mobile,
        s_email: req.body.s_email,
        password: req.body.password,
        fields: req.body.selected
    })

    record
        .save(record)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some erro occurred while creating"
            })
        })
}

//retrive and return all/single record
exports.find = (req, res) => {

}

//update a record by object id
exports.update = (req, res) => {

}

//delete a record by object id
exports.delete = (req, res) => {

}

//topic registration 
exports.requestTopic = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" })
        return;
    }

    const topicRegisterRequest = new StudentTopicRequestModel({
        field: req.body.field,
        student_email: req.body.student_email,
        student_mobile: req.body.student_mobile,
        student_name: req.body.student_name,
        supervisor: req.body.supervisor,
        topic: req.body.topic,
        topic_details: req.body.topic_details,
        s_status: "Pending"
    })

    topicRegisterRequest.save().then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some erro occurred while creating"
        })
    })
}

//find topic requests according to the supervisor id
exports.findTopicRequestBySupervisorID = (req, res) => {
    const id = req.params.id;

    StudentTopicRequestModel.find({ supervisor: id }, (err, result) => {
        if (err) {
            res.send(err)
        }

        res.send(result)
    })

}

//update request with supervisor status
exports.setStatusForTopicRequest = (req, res) => {
    const id = req.body.id;
    const s_status = req.body.s_status;

    StudentTopicRequestModel.findByIdAndUpdate(id, { $set: { "s_status": s_status } }, { upsert: true }, (err, result) => {
        if (err) {
            res.send(err)
        }

        res.send(result)
    })

}



//validate supervisor login
exports.validateSupervisor = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" })
        return;
    }

    const data = {
        s_email: req.body.s_email,
        password: req.body.password
    }

    SupervisorModel.findOne(data, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
}

//find supervisors according to the field
exports.findSupervisorByField = (req, res) => {
    const field = req.params.field;

    SupervisorModel.find({
        fields: { $in: [field] }
    }, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
}


//Create Supervisor Chat
exports.createChat = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" })
        return;
    }

    const obj = new ChatModel({
        group_id: req.body.group_id,
        data: req.body.data,
        supervisor_id: req.body.supervisor_id,
        group_data: req.body.group_data
    })


    obj.save(obj).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some erro occurred while creating"
        })
    })
}

// Add chats into chat object
exports.putChatsInToGroupChat = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" })
        return;
    }

    const group_id = req.body.group_id;
    const data = req.body.data;

    // console.log(chat)

    ChatModel.findOneAndUpdate({
        group_id: group_id
    }, { $push: { data } }, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
}


//view chat according to the supervisor id
exports.viewChatBySupervisorId = (req, res) => {
    const id = req.params.id;

    ChatModel.find({ supervisor_id: id }, (err, result) => {
        if (err)
            res.send(err)
        res.send(result)
    })
}

//view chat according to the group id
exports.viewChatByGroupId = (req, res) => {
    const id = req.params.id;

    ChatModel.find({ group_id: id }, (err, result) => {
        if (err)
            res.send(err)
        res.send(result)
    })
}