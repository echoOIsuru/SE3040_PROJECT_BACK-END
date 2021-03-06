const router = require("express").Router();
const Student = require("../../models_db/studentmodule");
// const bcrypt = require("bcrypt");
// const Joi = require("joi");

router.post("/", async (req, res) => {
	try {
		// console.log(req.body);
		// if (error)
		// 	return res.status(400).send({ message: error.details[0].message });
		const user = await Student.findOne({ email: req.body.email });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });
		if (user.password !== req.body.password)
			return res.status(401).send({ message: "Invalid Email or Password" });


		res.send(user);
		// const token = user.email;
		// res.cookie("uid", token, { maxAge: 900000000 })

	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

// const validate = (data) => {
// 	const schema = Joi.object({
// 		email: Joi.string().email().required().label("Email"),
// 		password: Joi.string().required().label("Password"),
// 	});
// 	return schema.validate(data);
// };

module.exports = router;
