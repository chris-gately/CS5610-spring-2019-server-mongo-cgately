const studentDao = require('../data/dao/student.dao.server')
module.exports = app => {
    createStudent = (req, res) =>
        studentDao.createStudent(req.body)
            .then(function(response){
                if(response){
                    res.send(response);
                } else {
                    res.send(0);
                }
            })

    findAllStudents = (req, res) =>
        studentDao.findAllStudents()
            .then(function(response){
                if(response){
                    res.send(response);
                } else {
                    res.send(0);
                }
            })

    findStudentById = (req, res) =>
        studentDao.findStudentById(req.params['studentId'])
            .then(function(response){
                if(response){
                    res.send(response);
                } else {
                    res.send(0);
                }
            })

    deleteStudent = (req, res) =>
        studentDao.deleteStudent(req.params['studentId'])
            .then(function(response){
                if(response){
                    res.send(response);
                } else {
                    res.send(0);
                }
            })

    updateStudent = (req, res) =>
        studentDao.updateStudent(req.params['studentId'], req.body)
            .then(function(response){
                if(response){
                    res.send(response);
                } else {
                    res.send(0);
                }
            })

    app.put('/api/student/:studentId', updateStudent)
    app.delete('/api/student/:studentId', deleteStudent)
    app.get('/api/student/:studentId', findStudentById)
    app.get('/api/student', findAllStudents)
    app.post('/api/student', createStudent)
}
