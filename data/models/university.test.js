require('../db')()
const universityDao = require('../dao/university.dao.server')

// dao.findAllStudents().then(user => console.log(user))

//dao.createStudent({
//    username: 'captainAmerica', password: 'vibranium',
//    firstName: 'Steve', lastName: 'Rogers'
//}).then(student => console.log(student))

//dao.updateStudent('5cb012b4d800a622a0df5df7',
//    {password: 'nomad'}).then(status => console.log(status))
//dao.findStudentById('5cb012b4d800a622a0df5df7').then(student => console.log(student))

//universityDao.truncateDatabase()

universityDao.populateDatabase()
