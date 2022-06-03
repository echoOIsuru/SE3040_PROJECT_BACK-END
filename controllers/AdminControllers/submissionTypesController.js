const SubmissionTypesModel = require("../../models_db/AdminModels/submissionTypesModel.js");

const createTypes = async (req, res) => {

    try {

        const {
            submission_type,
            submission_description,
            submission_deadline
        } = req.body;

        const findSubmissionType = await SubmissionTypesModel.find({
            $and: [
                { submission_type:submission_type }
            ]
        })

        if (findSubmissionType.length > 0) {
            return res.status(409).json({ message: submission_type + " already exists in the system! Please Enter a Diffrent Submission Type" });
        }

        const type = new SubmissionTypesModel({
            submission_type,
            submission_description,
            submission_deadline
        });

        await type.save();
        res.status(201).json(type);

    } catch (error) {
        res.status(400).json(error);
    }

};


const getsubmissionTypes = async (req, res) => {

    try {
        const types = await SubmissionTypesModel.find();
        res.status(200).json(types);
    } catch (error) {
        res.status(400).json(error);
    }
};


module.exports = {
    createTypes,
    getsubmissionTypes
}