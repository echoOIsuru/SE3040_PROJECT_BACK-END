const router = require("express").Router();

let TopicEvaluateModel= require("../../Models/TopicEvaluateModel");




router.route("/").get((req, res) => {

    TopicEvaluateModel.find().then((students) => {
        res.json(students)
    }).catch((err) => {
        console.log(err)
    })

})

module.exports = router;