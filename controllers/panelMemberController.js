var PanelMemberModel = require('../Models/PanelMemberModel');

//Register panel member
exports.register = async(req, res) => {
    if(!req.body){
        res.status(400).send({
            message : "Content Cannot Be Empty"
        });
        return;
    }

    const record = new PanelMemberModel({
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        research : req.body.research,
        username : req.body.username,
        password : req.body.password
    })

    record
        .save(record)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message : err.message || "Error occurred while registering"
            })
        })
}