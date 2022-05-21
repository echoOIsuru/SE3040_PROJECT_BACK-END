const MarkingModel = require("../../Models/AdminModels/markingSchemesModel.js");

const createMarkingScheme = async (req, res) => {

    try {
        const {
            scheme_ID,
            scheme_name,
            note,
            file_path,
            file_mimetype
        } = req.body;

        const findMarkingScheme = await MarkingModel.find({
            $and: [
                { scheme_ID:scheme_ID }
            ]
        })

        if (findMarkingScheme.length > 0) {
            return res.status(409).json({ message: scheme_ID + " already exists in the System! Please Enter a Different One." });
        }

        const doc = new  MarkingModel({
            scheme_ID,
            scheme_name,
            note,
            file_path,
            file_mimetype
        });

        await doc.save();
        res.status(201).json(doc);

    } catch (error) {
        res.status(400).json(error);
    }

};



module.exports = {
    createMarkingScheme,
}