// build your `/api/tasks` router here
const tRouter = require('express').Router();
const Task = require('./model.js');

tRouter.get('/', async (req, res, next) => {
    try {
        const tasks = await Task.tGet();
        res.status(200).json(tasks);
    } catch (err) {
        next(err);
    }
});



module.exports = tRouter;
