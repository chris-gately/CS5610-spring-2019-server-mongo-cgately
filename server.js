var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session')

var app = express();

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


require('./data/db')()

//const userDao = require('./data/dao/user.dao.server')

//const sectionDao = require('./data/dao/section.dao.server');
//const enrollmentDao = require('./data/dao/enrollment.dao.server')
// enrollmentDao.
//   enrollStudentIntoSection('5bf34e0a0eada8ea44044b05', '5bf35ff7fa839540015cf0bd')
//   .then(e => console.log(e))

//enrollmentDao.studentEnrollments('5bf34e0a0eada8ea44044b05')
//    .then(e => console.log(e))

// require('./services/session.service.server')(app)

const studentService = require('./services/student.service.server.js')
const universityService = require('./services/university.service.server')
const questionService = require('./services/question.service.server')
const answerService = require('./services/answer.service.server')
studentService(app)
universityService(app)
questionService(app)
answerService(app)

//sayHello = (req, res) => {
//    const user = req.params['user']
//    const message = req.query['message']
//    res.send({user: user, message: message})
//}

//createCourse = (req, res) => {
//    console.log(req.body)
//    res.json(req.body)
//}

//app.post('/api/course', createCourse)
//app.get('/hello/:user', sayHello)

// Listen to heroku provided port
app.listen(process.env.PORT);
