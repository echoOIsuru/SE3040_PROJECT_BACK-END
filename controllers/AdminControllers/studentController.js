const StudentModel = require("../../models_db/studentmodule");

//get all students
const getStudents = async (req, res) => {

    try {
        const students = await StudentModel.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(400).json(error);
    }
};

//get all students by id
const getStudentById = async (req, res) => {

    const StudentId = req.params.id;
    try {
        const Student = await StudentModel.findById(StudentId);
        res.status(200).json(Student);

        if (!Student) {
            return res.status(404).json("No Student found for the given id!");
        }
    } catch (error) {
        res.status(400).json(error);
    }
};

//update student
const updateStudent = async (req, res) => {

    const StudentId = req.params.id;
    try {

        const Student = await StudentModel.findById(StudentId);

        if (!Student) {
            return res.status(404).json("Not found such a Student to update");
        }

        const { name,
            nic,
            age,
            gender,
            email,
            phone,
            password
        } = req.body;

        const UpdatedStudent = await StudentModel.findByIdAndUpdate(
            StudentId,
            {
                name,
                nic,
                age,
                gender,
                email,
                phone,
                password
            });

        res.status(200).json(UpdatedStudent);

    } catch (error) {
        res.status(400).json(error.message);
    }
};

//delete student
const deleteStudent = async (req, res) => {

    const StudentId = req.params.id;

    try {
        const Student = await StudentModel.findById(StudentId);

        if (!Student) {
            return res.status(404).json("Not found such a Student to delete");
        }

        const delStudent = await StudentModel.findByIdAndDelete(StudentId);
        res.status(200).json(delStudent);

    } catch (error) {
        res.status(400).json(error.message);
    }
};

//export created controller functions
module.exports = {
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
}