const mongoose = require('mongoose');
const answerSchema = require('../models/answer.schema.server');
const answerModel = mongoose.model('AnswerModel', answerSchema);

findAllAnswers = () =>
    answerModel.find()

findAnswerById = answerId =>
    answerModel.findById(answerId)

findAnswersByStudent = studentId =>
    answerModel.find({student: studentId})

findAnswersByQuestion = questionId =>
    answerModel.find({question: questionId})

createAnswer = answer =>
    answerModel.create(answer)

updateAnswer = (answerId, answer) =>
    answerModel.update({_id: answerId},
        {$set: answer})

deleteAnswer = answerId =>
    answerModel.remove({_id: answerId})

module.exports = {
    findAllAnswers, findAnswerById, findAnswersByStudent, findAnswersByQuestion, createAnswer, updateAnswer,
    deleteAnswer
}
