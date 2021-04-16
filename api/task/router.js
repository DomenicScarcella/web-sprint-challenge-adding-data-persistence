// build your `/api/tasks` router here
const tRouter = require('express').Router();
const Task = require('./model.js');

tRouter.get('/', (req, res, next) => {
    Task.tGet()
        .then(tasks => { res.status(200).json(tasks); })
        .catch(next);
});



module.exports = tRouter;
