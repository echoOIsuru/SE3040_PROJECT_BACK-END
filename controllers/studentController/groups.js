const router = require("express").Router();
let Group = require("../../models_db/groupRegistration");




router.post("/add", async (req, res) => {

    const user = await Group.findOne({ group_name: req.body.group_name });
    if (user)
        return res
            .status(409)
            .send({ message: "User with given email already Exist!" });

    const group_name = req.body.group_name;
    const leader = req.body.leader;
    const member1 = req.body.member1;
    const member2 = req.body.member2;
    const member3 = req.body.member3;
    const leader_nic = req.body.leader_nic;
    const member1_nic = req.body.member1_nic;
    const member2_nic = req.body.member2_nic;
    const member3_nic = req.body.member3_nic;
    const email = req.body.email;
    const newStudent = new Group({

        group_name,
        leader,
        member1,
        member2,
        member3,
        leader_nic,
        member1_nic,
        member2_nic,
        member3_nic,
        email,
    })

    newStudent.save().then(() => {
        res.json("successfully added")
    }).catch((err) => {

        console.log(err);
    })

})

router.route("/get").get(async (req, res) => {
    console.log(req.cookies);
    let userId = req.cookies.uid;
    const user = await Group.find({ email: userId }).then((user) => {

        res.status(200).send([user])
    })
})







module.exports = router;