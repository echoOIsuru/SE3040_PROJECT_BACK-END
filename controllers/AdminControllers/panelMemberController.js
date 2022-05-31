const PanelMemberModel = require("../../Models/PanelMemberModel.js");


const getPanelMembers = async (req, res) => {

    try {
        const PanelMember = await PanelMemberModel.find();
        res.status(200).json(PanelMember);
    } catch (error) {
        res.status(400).json(error);
    }
};


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

module.exports = {
    getPanelMembers,
    getPanelMemberById,
    updatePanelMember,
    deletePanelMember
}