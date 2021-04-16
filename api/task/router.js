// build your `/api/tasks` router here
const router = require('express').Router();
const Task = require('./model.js');

router.get('/', (req, res, next) => {
    Task.tGet()
        .then(tasks => { res.status(200).json(tasks); })
        .catch(next);
});




router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'Something went wrong in tasks router',
        message: err.message,
        stack: err.stack,
    });
});

module.exports = router;
