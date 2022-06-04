const SubmissionTypesModel = require("../../models_db/AdminModels/submissionTypesModel.js");

//add submission types
const createTypes = async (req, res) => {

    try {

        const {
            submission_type,
            submission_description,
            submission_deadline
        } = req.body;

        const findSubmissionType = await SubmissionTypesModel.find({
            $and: [
                { submission_type: submission_type }
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

//get all submission types
const getsubmissionTypes = async (req, res) => {

    try {
        const types = await SubmissionTypesModel.find();
        res.status(200).json(types);
    } catch (error) {
        res.status(400).json(error);
    }
};

//get submission types by id
const getsubmissionTypesById = async (req, res) => {

    const SubmissionTypesId = req.params.id;
    try {
        const SubmissionTypes = await SubmissionTypesModel.findById(SubmissionTypesId);
        res.status(200).json(SubmissionTypes);

        if (!SubmissionTypes) {
            return res.status(404).json("No SubmissionTypes found for the given id!");
        }
    } catch (error) {
        res.status(400).json(error);
    }
};

//update submission type
const updatesubmissionTypes = async (req, res) => {

    const SubmissionTypesId = req.params.id;
    try {

        const SubmissionTypes = await SubmissionTypesModel.findById(SubmissionTypesId);

        if (!SubmissionTypes) {
            return res.status(404).json("Not found such a SubmissionTypes to update");
        }

        const { submission_description,
            submission_deadline
        } = req.body;

        const UpdatedSubmissionTypes = await SubmissionTypesModel.findByIdAndUpdate(
            SubmissionTypesId,
            {
                submission_description,
                submission_deadline
            });

        res.status(200).json(UpdatedSubmissionTypes);

    } catch (error) {
        res.status(400).json(error.message);
    }
};

//delete submission type
const deleteSubmissionTypes = async (req, res) => {

    const SubmissionTypesId = req.params.id;

    try {
        const SubmissionTypes = await SubmissionTypesModel.findById(SubmissionTypesId);

        if (!SubmissionTypes) {
            return res.status(404).json("Not found such a SubmissionTypes to delete");
        }

        const delSubmissionTypes = await SubmissionTypesModel.findByIdAndDelete(SubmissionTypesId);
        res.status(200).json(delSubmissionTypes);

    } catch (error) {
        res.status(400).json(error.message);
    }
};

//export created controller functions
module.exports = {
    createTypes,
    getsubmissionTypes,
    getsubmissionTypesById,
    updatesubmissionTypes,
    deleteSubmissionTypes
}