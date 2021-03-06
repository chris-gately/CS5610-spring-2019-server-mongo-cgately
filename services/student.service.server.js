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
        studentDao.findStudentById(req.params['id'])
            .then(function(response){
                if(response){
                    res.send(response);
                } else {
                    res.send(0);
                }
            })

    deleteStudent = (req, res) =>
        studentDao.deleteStudent(req.params['id'])
            .then(function(response){
                if(response){
                    res.send(response);
                } else {
                    res.send(0);
                }
            })

    updateStudent = (req, res) =>
        studentDao.updateStudent(req.params['id'], req.body)
            .then(function(response){
                if(response){
                    res.send(response);
                } else {
                    res.send(0);
                }
            })

    app.get('/api/student', findAllStudents)
    app.post('/api/student', createStudent)
    app.get('/api/student/:id', findStudentById)
    app.put('/api/student/:id', updateStudent)
    app.delete('/api/student/:id', deleteStudent)
}
