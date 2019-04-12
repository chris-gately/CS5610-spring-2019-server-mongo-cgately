require('../db')
const studentDao = require('../dao/student.dao.server')
const answerDao = require('../dao/answer-dao-server')
const questionDao = require('../dao/question.dao.server')

truncateDatabase = () =>
    answerDao.clearAnswers()
        .then(status => {
            console.log(status);
            return questionDao.clearQuestions()
        })
        .then(status => {
            console.log(status);
            return studentDao.clearStudents()
        })
        .then(status => {
            console.log(status)
        });

populateDatabase = () =>
    studentDao.createStudent(
        {
            _id: 123,
            username: 'alice',
            password: 'alice',
            firstName: 'Alice',
            lastName: 'Wonderland',
            gradYear: 2020,
            scholarship: 15000
        })
        .then(user => {
            console.log(user);
            return studentDao.createStudent(
                {
                    _id: 234,
                    username: 'bob',
                    password: 'bob',
                    firstName: 'Bob',
                    lastName: 'Hope',
                    gradYear: 2021,
                    scholarship: 12000
                }
            )
        })
        .then(user => {
            console.log(user);
            return questionDao.createQuestion(
                {
                    _id: 321,
                    question: 'Is the following schema valid?',
                    points: 10,
                    questionType: 'TRUE_FALSE',
                    isTrue: false
                }
            )
        })
        .then(question => {
            console.log(question);
            return questionDao.createQuestion(
                {
                    _id: 432,
                    question: 'DAO stands for Dynamic Access Object.',
                    points: 10,
                    questionType: 'TRUE_FALSE',
                    isTrue: false
                }
            )
        })
        .then(question => {
            console.log(question);
            return questionDao.createQuestion(
                {
                    _id: 543,
                    question: 'What does JPA stand for?',
                    points: 10,
                    questionType: 'MULTIPLE_CHOICE',
                    choices: 'Java Persistence API,Java Persisted Application,JavaScript Persistence API,' +
                        'JSON Persistent Associations',
                    correct: 1
                }
            )
        })
        .then(question => {
            console.log(question);
            return questionDao.createQuestion(
                {
                    _id: 654,
                    question: 'What does ORM stand for?',
                    points: 10,
                    questionType: 'MULTIPLE_CHOICE',
                    choices: 'Object Relational Model,Object Relative Markup,Object Reflexive Model,' +
                        'Object Relational Mapping',
                    correct: 4
                }
            )
        })
        .then(question => {
            console.log(question);
            return answerDao.createAnswer(
                {
                    _id: 123,
                    trueFalseAnswer: true,
                    student: 123,
                    question: 321
                }
            )
        })
        .then(answer => {
            console.log(answer);
            return answerDao.createAnswer(
                {
                    _id: 234,
                    trueFalseAnswer: false,
                    student: 123,
                    question: 432
                }
            )
        })
        .then(answer => {
            console.log(answer);
            return answerDao.createAnswer(
                {
                    _id: 345,
                    multipleChoiceAnswer: 1,
                    student: 123,
                    question: 543
                }
            )
        })
        .then(answer => {
            console.log(answer);
            return answerDao.createAnswer(
                {
                    _id: 456,
                    multipleChoiceAnswer: 2,
                    student: 123,
                    question: 654
                }
            )
        })
        .then(question => {
            console.log(question);
            return answerDao.createAnswer(
                {
                    _id: 567,
                    trueFalseAnswer: false,
                    student: 234,
                    question: 321
                }
            )
        })
        .then(answer => {
            console.log(answer);
            return answerDao.createAnswer(
                {
                    _id: 678,
                    trueFalseAnswer: true,
                    student: 234,
                    question: 432
                }
            )
        })
        .then(answer => {
            console.log(answer);
            return answerDao.createAnswer(
                {
                    _id: 789,
                    multipleChoiceAnswer: 3,
                    student: 234,
                    question: 543
                }
            )
        })
        .then(answer => {
            console.log(answer);
            return answerDao.createAnswer(
                {
                    _id: 890,
                    multipleChoiceAnswer: 4,
                    student: 234,
                    question: 654
                }
            )
        });

module.exports = {
    truncateDatabase, populateDatabase
}
