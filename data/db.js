module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = 'white-board';
    //var connectionString = 'mongodb://localhost/';
    var connectionString = 'mongodb://heroku_d8lrztq8:2331v3fev4vpbp8jurja4gdcu@ds139576.mlab.com:39576/heroku_d8lrztq8'
    connectionString += databaseName;
    mongoose.connect(connectionString)
}
