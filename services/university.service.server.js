const universityDao = require('../data/dao/university.dao.server')
module.exports = app => {
    truncateDatabase = (req, res) =>
        res.json(universityDao.truncateDatabase());

    populateDatabase = (req, res) =>
        res.json(universityDao.populateDatabase());

    app.delete('/api/all', truncateDatabase)
    app.post('/api/populate', populateDatabase)
}
