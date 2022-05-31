const PanelAllocationModel = require("../../Models/AdminModels/panelAllocationModel.js");
const PanelMemberModel = require("../../Models/PanelMemberModel.js")
const StGroupsModel = require("../../Models/groupRegistrationModel.js")

const createAllocation = async (req, res) => {

    try {
        const {
            student_group,
            panel_member1,
            panel_member2,
        } = req.body;

        const findAllocations = await PanelAllocationModel.find({
            $and: [
                { student_group: student_group }
            ]
        })

        if (findAllocations.length > 0) {
            return res.status(409).json({ message: student_group + " has already Allocated to a Panel! Please do Allocations for a Different group" });
        }

        const panel = new PanelAllocationModel({
            student_group,
            panel_member1,
            panel_member2,
        });

        await panel.save();
        res.status(201).json(panel);

    } catch (error) {
        res.status(400).json(error);
    }

};


const getAllocatedPanels = async (req, res) => {

    try {
        const panels = await PanelAllocationModel.find();
        res.status(200).json(panels);
    } catch (error) {
        res.status(400).json(error);
    }
};

const getAllPanelMembers = async (req, res) => {

    try {
        const panelMem = await PanelMemberModel.find();
        res.status(200).json(panelMem);
    } catch (error) {
        res.status(400).json(error);
    }
};

const getAllStudentGroups = async (req, res) => {

    try {
        const stGrp = await StGroupsModel.find();
        res.status(200).json(stGrp);
    } catch (error) {
        res.status(400).json(error);
    }
};


const getAllocatedPanelByID = async (req, res) => {

    const PanelId = req.params.id;
    try {
        const panel = await PanelAllocationModel.findById(PanelId);
        res.status(200).json(panel);

        if (!panel) {
            return res.status(404).json("No panel found for the given id!");
        }
    } catch (error) {
        res.status(400).json(error);
    }
};


const updateAllocatedPanel = async (req, res) => {

    const PanelId = req.params.id;
    try {

        const panel = await PanelAllocationModel.findById(PanelId);

        if (!panel) {
            return res.status(404).json("Not found such a panel to update");
        }

        const { 
            panel_member1,
            panel_member2,
        } = req.body;

        const UpdatedPanel = await PanelAllocationModel.findByIdAndUpdate(
            PanelId,
            {
                panel_member1,
                panel_member2,
            });

        res.status(200).json(UpdatedPanel);

    } catch (error) {
        res.status(400).json(error.message);
    }
};

const deleteAllocatedPanel = async (req, res) => {

    const panelId = req.params.id;

    try {
        const Student = await PanelAllocationModel.findById(panelId);

        if (!Student) {
            return res.status(404).json("Not found such a Panel to delete");
        }

        const delpanel = await PanelAllocationModel.findByIdAndDelete(panelId);
        res.status(200).json(delpanel);

    } catch (error) {
        res.status(400).json(error.message);
    }
};



module.exports = {
    createAllocation,
    updateAllocatedPanel,
    getAllocatedPanelByID,
    getAllocatedPanels,
    getAllPanelMembers,
    getAllStudentGroups,
    deleteAllocatedPanel
}