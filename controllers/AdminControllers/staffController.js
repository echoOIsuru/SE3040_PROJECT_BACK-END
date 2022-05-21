const StaffModel = null
//require("../../Models/staffModel.js");


const getStaff = async (req, res) => {

    try {
        const Staff = await StaffModel.find();
        res.status(200).json(Staff);
    } catch (error) {
        res.status(400).json(error);
    }
};


const getStaffById = async (req, res) => {

    const StaffId = req.params.id;
    try {
        const Staff = await StaffModel.findById(StaffId);
        res.status(200).json(Staff);

        if (!Staff) {
            return res.status(404).json("No Staff member found for the given id!");
        }
    } catch (error) {
        res.status(400).json(error);
    }
};


const updateStaff = async (req, res) => {

    const StaffId = req.params.id;
    try {

        const Staff = await StaffModel.findById(StaffId);

        if (!Staff) {
            return res.status(404).json("Not found such a staff member to update");
        }

        const {
            Staff_category,
            Staff_name,
            Staff_quantity,
            Staff_description
        } = req.body;

        const productStaff = await StaffModel.findByIdAndUpdate(
            StaffId,
            {
                Staff_category,
                Staff_name,
                Staff_quantity,
                Staff_description
            });

        res.status(200).json(productStaff);

    } catch (error) {
        res.status(400).json(error.message);
    }
};

const deleteStaff = async (req, res) => {

    const StaffId = req.params.id;

    try {
        const Staff = await StaffModel.findById(StaffId);

        if (!Staff) {
            return res.status(404).json("Not found such a Product Staff to delete");
        }

        const delStaff = await StaffModel.findByIdAndDelete(StaffId);
        res.status(200).json(delStaff);

    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports = {
    getStaff,
    getStaffById,
    updateStaff,
    deleteStaff
}