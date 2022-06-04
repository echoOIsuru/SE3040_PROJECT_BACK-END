const AdminLoginModel = require("../../Models/AdminModels/AdminLogin.js");


const validateAdminLogin = async (req, res) => {

    if (!req.body) {
        res.status(400).send({ message: "Feilds Values cannot be empty!" })
        return;
    }

    const {
        admin_username,
        admin_password,
      } = req.body;

      const findDocument = await  AdminLoginModel.find({
        $and: [
            { admin_username:admin_username },
            { admin_password:admin_password}
            
        ]
    })

    if (findDocument.length > 0) {
        //return res.status(200).json({ message: admin_username + " You have successfully logged in to system." });
        return res.status(200).json(findDocument);
    }



    // const data = {
    //     admin_username: req.body.admin_username,
    //     admin_password: req.body.admin_password
    // }

    // AdminLoginModel.findOne(data, (err, result) => {
    //     if (err) {
    //         res.send(err)
    //     }
    //     res.send(result)
    // })
};

module.exports = {
    validateAdminLogin
}