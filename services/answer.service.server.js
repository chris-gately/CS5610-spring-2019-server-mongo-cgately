const answerDao = require('../data/dao/answer-dao-server')
module.exports = app => {

    answerQuestion = (req, res) =>
        answerDao.answerQuestion(req.params['sid'], req.params['qid'], req.body)
            .then(function (response) {
                if (response) {
                    res.send(response);
                } else {
                    res.send(0);
                }
            })

    findAllAnswers = (req, res) =>
        answerDao.findAllAnswers()
            .then(function (response) {
                if (response) {
                    res.send(response);
                } else {
                    res.send(0);
                }
            })

    findAnswerBySidAndQid = (req, res) =>
        answerDao.findAnswersBySidAndQid(req.params['sid'], req.params['qid'])
            .then(function (response) {
                if (response) {
                    res.send(response);
                } else {
                    res.send(0);
                }
            })


    deleteAnswer = (req, res) =>
        answerDao.deleteAnswer(req.params['id'])
            .then(function (response) {
                if (response) {
                    res.send(response);
                } else {
                    res.send(0);
                }
            })

    app.get('/api/answer', findAllAnswers)
    app.post('/api/student/:sid/question/:qid/answer', answerQuestion)
    app.get('/api/student/:sid/question/:qid/answer', findAnswerBySidAndQid)
    app.get('/api/question/:qid/student/:sid/answer', findAnswerBySidAndQid)
    app.delete('/api/answer/:id', deleteAnswer)
}
