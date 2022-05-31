const router = require("express").Router();
let Topic= require("../../Models/TopicregistrationModel");




router.post("/add",async (req, res) => {

    const user = await Topic.findOne({ topic: req.body.topic});
    if (user)
        return res
            .status(409)
            .send({ message: "User with given email already Exist!" });

    const topic = req.body.topic;
    const email = req.body.email;
    const nic = req.body.nic;
    const newStudent = new Topic({

        topic,
       
        email,
  
        nic,

    })

    newStudent.save().then(() => {
        res.json("successfully added")
    }).catch((err) => {

        console.log(err);
    })

})

// router.route("/").get((req, res) => {

//     Topic.find().then((topics) => {
//         res.json(topics)
//     }).catch((err) => {
//         console.log(err)
//     })

// })




router.route("/get").get(async (req, res) => {
	console.log(req.cookies);
		let userId = req.cookies.uid;
		const user = await Topic.findOne({email:userId}).then((user) => {
	
			res.status(200).send( [user] )
		})
	})



module.exports = router;