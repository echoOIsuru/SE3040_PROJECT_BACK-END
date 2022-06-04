const AdminLoginModel = require("../../models_db/AdminModels/AdminLogin.js");

//validate the entered credintials from the client side
const validateAdminLogin = async (req, res) => {

    if (!req.body) {
        res.status(400).send({ message: "Feilds Values cannot be empty!" })
        return;
    }

    console.log("validateAdmin");

    // const {
    //     admin_username,
    //     admin_password,
    // } = req.body;

    // const findDocument = await AdminLoginModel.find({
    //     $and: [
    //         { admin_username: admin_username },
    //         { admin_password: admin_password }

    //     ]
    // })

    // if (findDocument.length > 0) {
    //     //return res.status(200).json({ message: admin_username + " You have successfully logged in to system." });
    //     return res.status(200).json(findDocument);
    // }



    const data = {
        admin_username: req.body.admin_username,
        admin_password: req.body.admin_password
    }

    AdminLoginModel.findOne(data, (err, result) => {
        if (err) {
            res.send(err)
        }
        console.log("result",result)
        res.send(result)
    })
};

//export the created validate controller function
module.exports = {
    validateAdminLogin
}