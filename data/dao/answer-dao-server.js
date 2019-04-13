const answerModel = require('../models/answer.model.server');

findAllAnswers = () =>
    answerModel.find()

findAnswerById = answerId =>
    answerModel.findById(answerId)

findAnswersByStudent = studentId =>
    answerModel.find({student: studentId})

findAnswersByQuestion = questionId =>
    answerModel.find({question: questionId})

findAnswersBySidAndQid = (studentId, questionId) =>
    answerModel.find({student: studentId,
    question: questionId})

createAnswer = answer =>
    answerModel.create(answer)

deleteAnswer = answerId =>
    answerModel.remove({_id: answerId})

clearAnswers = () =>
    answerModel.deleteMany({})

answerQuestion = (studentId, questionId, answer) => {
    let updatedAnswer = answer
    updatedAnswer.student = studentId
    updatedAnswer.question = questionId
    return answerModel.create(updatedAnswer)
}




//answer.student = studentId
    //answer.question = questionId
    //answerModel.create(answer)

module.exports = {
    findAllAnswers, findAnswerById, findAnswersByStudent, findAnswersByQuestion, createAnswer, deleteAnswer,
    clearAnswers, findAnswersBySidAndQid, answerQuestion
}
