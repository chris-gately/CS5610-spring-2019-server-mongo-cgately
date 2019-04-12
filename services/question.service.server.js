const questionDao = require('../data/dao/question.dao.server')
module.exports = app => {
    createQuestion = (req, res) =>
        questionDao.createQuestion(req.body)
            .then(function(response){
                if(response){
                    res.send(response);
                } else {
                    res.send(0);
                }
            })

    findAllQuestions = (req, res) =>
        questionDao.findAllQuestions()
            .then(function(response){
                if(response){
                    res.send(response);
                } else {
                    res.send(0);
                }
            })

    findQuestionById = (req, res) =>
        questionDao.findQuestionById(req.params['id'])
            .then(function(response){
                if(response){
                    res.send(response);
                } else {
                    res.send(0);
                }
            })

    deleteQuestion = (req, res) =>
        questionDao.deleteQuestion(req.params['id'])
            .then(function(response){
                if(response){
                    res.send(response);
                } else {
                    res.send(0);
                }
            })

    updateQuestion = (req, res) =>
        questionDao.updateQuestion(req.params['id'], req.body)
            .then(function(response){
                if(response){
                    res.send(response);
                } else {
                    res.send(0);
                }
            })

    app.get('/api/question', findAllQuestions)
    app.post('/api/question', createQuestion)
    app.get('/api/question/:id', findQuestionById)
    app.put('/api/question/:id', updateQuestion)
    app.delete('/api/question/:id', deleteQuestion)
}
