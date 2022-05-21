const StudentModel = null
//require("../../Models/StudentModel.js");


const getStudents = async (req, res) => {

    try {
        const students = await StudentModel.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(400).json(error);
    }
};


const getStudentById = async (req, res) => {

    const StudentId = req.params.id;
    try {
        const Student = await StudentModel.findById(StudentId);
        res.status(200).json(Student);

        if (!Student) {
            return res.status(404).json("No Student member found for the given id!");
        }
    } catch (error) {
        res.status(400).json(error);
    }
};


const updateStudent = async (req, res) => {

    const StudentId = req.params.id;
    try {

        const Student = await StudentModel.findById(StudentId);

        if (!Student) {
            return res.status(404).json("Not found such a Student member to update");
        }

        const {
            Student_category,
            Student_name,
            Student_quantity,
            Student_description
        } = req.body;

        const productStudent = await StudentModel.findByIdAndUpdate(
            StudentId,
            {
                Student_category,
                Student_name,
                Student_quantity,
                Student_description
            });

        res.status(200).json(productStudent);

    } catch (error) {
        res.status(400).json(error.message);
    }
};

const deleteStudent = async (req, res) => {

    const StudentId = req.params.id;

    try {
        const Student = await StudentModel.findById(StudentId);

        if (!Student) {
            return res.status(404).json("Not found such a Product Student to delete");
        }

        const delStudent = await StudentModel.findByIdAndDelete(StudentId);
        res.status(200).json(delStudent);

    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports = {
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
}