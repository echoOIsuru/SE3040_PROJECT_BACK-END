const PanelMemberModel = require("../../models_db/PanelMemberModel.js");

//get all panel members
const getPanelMembers = async (req, res) => {

    try {
        const PanelMember = await PanelMemberModel.find();
        res.status(200).json(PanelMember);
    } catch (error) {
        res.status(400).json(error);
    }
};

//get panel members by id
const getPanelMemberById = async (req, res) => {

    const PanelMemberId = req.params.id;
    try {
        const PanelMember = await PanelMemberModel.findById(PanelMemberId);
        res.status(200).json(PanelMember);

        if (!PanelMember) {
            return res.status(404).json("No Panel Member found for the given id!");
        }
    } catch (error) {
        res.status(400).json(error);
    }
};

//update panel members
const updatePanelMember = async (req, res) => {

    const PanelMemberId = req.params.id;
    try {

        const PanelMember = await PanelMemberModel.findById(PanelMemberId);

        if (!PanelMember) {
            return res.status(404).json("Not found such a Panel Member to update");
        }

        const {
            name,
            email,
            phone,
            research
        } = req.body;

        const UpdatedPanelMember = await PanelMemberModel.findByIdAndUpdate(
            PanelMemberId,
            {
                name,
                email,
                phone,
                research
            });

        res.status(200).json(UpdatedPanelMember);

    } catch (error) {
        res.status(400).json(error.message);
    }
};

//delete panel members
const deletePanelMember = async (req, res) => {

    const PanelMemberId = req.params.id;

    try {
        const PanelMember = await PanelMemberModel.findById(PanelMemberId);

        if (!PanelMember) {
            return res.status(404).json("Not found such a Panel Member to delete");
        }

        const delPanelMember = await PanelMemberModel.findByIdAndDelete(PanelMemberId);
        res.status(200).json(delPanelMember);

    } catch (error) {
        res.status(400).json(error.message);
    }
};

//export created controller functions
module.exports = {
    getPanelMembers,
    getPanelMemberById,
    updatePanelMember,
    deletePanelMember
}