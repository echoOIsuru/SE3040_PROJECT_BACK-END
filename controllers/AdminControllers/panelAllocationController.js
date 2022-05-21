const PanelAllocationModel = require("../../Models/AdminModels/panelAllocationModel.js");

const createAllocation = async (req, res) => {

    try {
        const {
            student_group,
            panel_member1,
            panel_member2,
            remarks
        } = req.body;

        const findAllocations = await PanelAllocationModel.find({
            $and: [
                { student_group:student_group }
            ]
        })

        if (findAllocations.length > 0) {
            return res.status(409).json({ message: student_group + " Already has Allocated to a Panel! Please do Allocations for a Different group" });
        }

        const panel = new PanelAllocationModel({
            student_group,
            panel_member1,
            panel_member2,
            remarks
        });

        await panel.save();
        res.status(201).json(panel);

    } catch (error) {
        res.status(400).json(error);
    }

};



module.exports = {
    createAllocation,
}