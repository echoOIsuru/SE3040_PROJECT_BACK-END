const router = require("express").Router();

let FinalPptEvaluateModel= require("../../Models/FinalPptEvaluateModel");




router.route("/").get((req, res) => {

    FinalPptEvaluateModel.find().then((students) => {
        res.json(students)
    }).catch((err) => {
        console.log(err)
    })

})

module.exports = router;