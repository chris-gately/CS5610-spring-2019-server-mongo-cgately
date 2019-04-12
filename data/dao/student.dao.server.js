const studentModel = require('../models/student.model.server');

findAllStudents = () =>
    studentModel.find()

findStudentById = studentId =>
    studentModel.findById(studentId)

findStudentByUsername = username =>
    studentModel.findOne({username: username})

createStudent = student =>
    studentModel.create(student)

updateStudent = (studentId, student) =>
    studentModel.update({_id: studentId},
        {$set: student})

deleteStudent = studentId =>
    studentModel.remove({_id: studentId})


module.exports = {
    findAllStudents, findStudentById, createStudent, updateStudent
}
