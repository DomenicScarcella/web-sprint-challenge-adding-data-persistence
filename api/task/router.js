// build your `/api/tasks` router here
const router = require('express').Router();
const Task = require('./model.js');

// GET
router.get('/', (req, res, next) => {
    Task.tGet()
        .then(tasks => { res.status(200).json(tasks); })
        .catch(next);
});

// POST
router.post('/', async (req, res, next) => {
    try {
        const { task_description, task_completed, project_id } = req.body;
        if (!task_description || !task_completed || !project_id) {
            res.status(404).json({ message: 'Task Description, Completed, and Project ID are required' });
        } else {
            const project = await Task.tPost(req.body);
            res.status(201).json(project);
        }
    } catch (err) {
        next(err);
    }
});

// error catch-all
router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'Something went wrong in tasks router',
        message: err.message,
        stack: err.stack,
    });
});

module.exports = router;
