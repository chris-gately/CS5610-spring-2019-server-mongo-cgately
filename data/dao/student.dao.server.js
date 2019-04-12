const studentModel = require('../models/student.model.server');

findAllStudents = () =>
    studentModel.find()

findStudentById = studentId =>
    studentModel.findById(studentId)

createStudent = student =>
    studentModel.create(student)

updateStudent = (studentId, student) =>
    studentModel.update({_id: studentId},
        {$set: student})

deleteStudent = studentId =>
    studentModel.remove({_id: studentId})

clearStudents = () =>
    studentModel.deleteMany({})


module.exports = {
    findAllStudents, findStudentById, createStudent, updateStudent, clearStudents
}
