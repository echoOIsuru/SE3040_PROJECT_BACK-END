const StudentTopicRequestModel = require('../models/StudentTopicRequestModel');
var SupervisorModel = require('../models/SupervisorModel');


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
        topic_details: req.body.topic_details
    })

    topicRegisterRequest.save().then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some erro occurred while creating"
        })
    })
}

