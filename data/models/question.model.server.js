const mongoose = require('mongoose')
const questionSchema = require('./question.schema.server')
const questiontModel = mongoose.model('QuestionModel', questionSchema)
module.exports = questiontModel;
