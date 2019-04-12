const mongoose = require('mongoose')
const studentSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
}, {collection: 'student'});
module.exports = studentSchema
