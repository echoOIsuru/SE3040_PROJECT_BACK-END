//const SupervisorModel = require('../models/SupervisorModel.js');

//create new record
exports.create = async(req, res) => {
    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"})
        return;
    }

    const record = new SupervisorModel({
        name: req.body.name,
        data: req.body.data,
    })

    record
        .save(record)
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Some erro occurred while creating"
            })
        })
}

//retrive and return all/single record
exports.find = (res, req) => {

}

//update a record by object id
exports.update = (res, req) => {

}

//delete a record by object id
exports.delete = (res, req) => {

}