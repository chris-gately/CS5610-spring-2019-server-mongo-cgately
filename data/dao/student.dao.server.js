const mongoose = require('mongoose');
const studentSchema = require('../models/student.schema.server');
const studentModel = mongoose.model('StudentModel', studentSchema);

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
