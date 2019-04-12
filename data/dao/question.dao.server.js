const mongoose = require('mongoose')
const questionSchema = require('../models/question.schema.server')
const questionModel = mongoose.model('QuestionModel', questionSchema)

findAllQuestions = () =>
    questionModel.find()

findQuestionById = questionId =>
    questionModel.findById(questionId)

createQuestion = question =>
    questionModel.create(question)

updateQuestion = (questionId, question) =>
    questionModel.update({_id: questionId},
        {$set: question})

deleteQuestion = questionId =>
    questionModel.remove({_id: questionId})

module.exports = {
    findAllQuestions, findQuestionById, createQuestion, updateQuestion, deleteQuestion
}
