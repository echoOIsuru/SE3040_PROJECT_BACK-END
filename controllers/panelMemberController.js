var PanelMemberModel = require('../Models/PanelMemberModel');
var TopicEvaluateModel = require('../Models/TopicEvaluateModel');
var FinalPptEvaluateModel = require('../Models/FinalPptEvaluateModel');
var AllocatedPanel = require('../Models/panelAllocationModel');

/** 
 *  Register panel member
**/
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

/** 
 *  Add topic feedback
**/
exports.addTopicFeedback = async(req, res) => {
    if(!req.body){
        res.status(400).send({
            message : "Content Cannot Be Empty"
        });
        return;
    }

    const record = new TopicEvaluateModel({
        groupId : req.body.groupId,
        status : req.body.status,
        feedbacks : req.body.feedbacks
    })

    record
        .save(record)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message : err.message || "Error occurred while adding"
            })
        })
}

/** 
 *  Add final presentation feedback
**/
exports.addFinalPptFeedback = async(req, res) => {
    if(!req.body){
        res.status(400).send({
            message : "Content Cannot Be Empty"
        });
        return;
    }

    const record = new FinalPptEvaluateModel({
        groupId : req.body.groupId,
        topic : req.body.topic,
        feedbacks : req.body.feedbacks
    })

    record
        .save(record)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message : err.message || "Error occurred while adding"
            })
        })
}

//retrieve allocated panel details
exports.retrievePanel = async(req, res) => {
    const id = req.params.id;

    AllocatedPanel.find({"panel_member1":id}, (err,result)=>{
        if(err){
            res.send(err)
        }

        let temp = result

        AllocatedPanel.find({"panel_member2":id}, (err,result)=>{
            if(err){
                res.send(err)
            }
    
            let temp2 = temp.concat(result)

           
            res.send(temp2)
        })
    


    })
    // .then(data => {
    //     if(!data){
    //         res.status(404).send({
    //             message : "Not found data with id : " + id
    //         });
    //     }else{
    //         res.send(data);
    //     }
    // })
    // .catch(err => {
    //     res.status(500).send({
    //         message : err.message || "Error occurred while retrieving"
    //     })
    // })
}

//retrieve group details
exports.retrieveGroup = async(req, res) => {
    const id = req.params.id;



    const temp = [
        {
            groupId: "7",
            topic:"Blockchain"
        },
        
        {
            groupId: "8",
            topic:"IOT"
        }
    ]

    res.send(temp);
    /***** topic registrations model ******************************************************************************* */
    // modelname.findById(id)
    // .then(data => {
    //     if(!data){
    //         res.status(404).send({
    //             message : "Not found data with id : " + id
    //         });
    //     }else{
    //         res.send(data);
    //     }
    // })
    // .catch(err => {
    //     res.status(500).send({
    //         message : err.message || "Error occurred while retrieving"
    //     })
    // })

   
}

/** 
 *  Update topic evaluation status
**/
exports.update = async(req, res) => {
    if(!req.body){
        return res.status(400).send({
            message : "Data to update cannot be empty"
        })
    }

    const id = req.params.id;

    TopicEvaluateModel.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
    .then(data => {
        if(!data){
            res.status(404).send({
                message : `Cannot update status with id : ${id}`
            });
        }else{
            const data = req.body
            data._id = req.params.id
            res.send(data);
        }
    })
    .catch(err => {
        res.status(500).send({
            message : "Error occurred while updating"
        })
    })
}

/** 
 *  Delete records of rejected topic details
**/
exports.delete = async(req, res) => {
    const id = req.params.id;

    TopicEvaluateModel.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({
                    message : `Cannot delete with id : ${id} `
                });
            }else{
                res.send({
                    message : "Rejected topic details were deleted successfully"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                messsage : "Could not delete data with id : " + id
            });
        });
}