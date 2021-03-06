const SupervisorModel = require("../../models_db/SupervisorModel.js");

//get all supervisors
const getSupervisor = async (req, res) => {

    try {
        const Staff = await SupervisorModel.find();
        res.status(200).json(Staff);
    } catch (error) {
        res.status(400).json(error);
    }
};

//get supervisors by id
const getSupervisorById = async (req, res) => {

    const StaffId = req.params.id;
    try {
        const Staff = await SupervisorModel.findById(StaffId);
        res.status(200).json(Staff);

        if (!Staff) {
            return res.status(404).json("No Supervisor found for the given id!");
        }
    } catch (error) {
        res.status(400).json(error);
    }
};

//update the selected supervisor
const updateSupervisor = async (req, res) => {

    const StaffId = req.params.id;
    try {

        const Staff = await SupervisorModel.findById(StaffId);

        if (!Staff) {
            return res.status(404).json("Not found such a supervisor to update");
        }

        const {
            s_name,
            s_mobile,
            password,
            fields
        } = req.body;

        const productStaff = await SupervisorModel.findByIdAndUpdate(
            StaffId,
            {
                s_name,
                s_mobile,
                password,
                fields
            });

        res.status(200).json(productStaff);

    } catch (error) {
        res.status(400).json(error.message);
    }
};

//delete supervisor
const deleteSupervisor = async (req, res) => {

    const StaffId = req.params.id;

    try {
        const Staff = await SupervisorModel.findById(StaffId);

        if (!Staff) {
            return res.status(404).json("Not found such a Supervisor to delete");
        }

        const delStaff = await SupervisorModel.findByIdAndDelete(StaffId);
        res.status(200).json(delStaff);

    } catch (error) {
        res.status(400).json(error.message);
    }
};

//export created controller functions
module.exports = {
    getSupervisor,
    getSupervisorById,
    updateSupervisor,
    deleteSupervisor
}