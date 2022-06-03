const router = require("express").Router();
let Student = require("../../models_db/studentmodule");




router.post("/add", async (req, res) => {

    const user = await Student.findOne({ email: req.body.email });
    if (user)
        return res
            .status(409)
            .send({ message: "User with given email already Exist!" });

    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const email = req.body.email;
    const phone = req.body.phone;
    const nic = req.body.nic;
    const password = req.body.password;
    const newStudent = new Student({

        name,
        age,
        gender,
        email,
        phone,
        nic,
        password,

    })

    newStudent.save().then(() => {
        res.json("successfully added")
    }).catch((err) => {

        console.log(err);
    })

})

router.route("/").get((req, res) => {

    Student.find().then((students) => {
        res.json(students)
    }).catch((err) => {
        console.log(err)
    })

})


router.route("/update/:id").put(async (req, res) => {

    let userId = req.params.id;
    const { name, age, gender, nic, phone, email, password } = req.body;

    const updateStudent = {
        name,
        age,
        gender,
        nic,
        email,
        phone,
        password

    }
    const update = await Student.findByIdAndUpdate(userId, updateStudent).then(() => {
        res.status(200).send({ status: "successfully updated" })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "error with updating data" });
    })

})


router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId).then(() => {
        res.status(200).send({ status: "successfully deleted" });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "error with delete user", error: err.message });
    })
})



router.route("/get/:id").get(async (req, res) => {

    let userId = req.params.id;
    const user = await Student.findById(userId).then((student) => {

        res.status(200).send({ status: "user fetch", student })
    })
})


router.route("/get").get(async (req, res) => {
    console.log(req.cookies);
    let userId = req.cookies.uid;
    const user = await Student.findOne({ email: userId }).then((user) => {

        res.status(200).send([user])
    })
})

module.exports = router;