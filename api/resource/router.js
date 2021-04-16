// build your `/api/resources` router here
const router = require('express').Router();
const Resource = require('./model.js');

// GET
router.get('/', (req, res, next) => {
    Resource.rGet()
        .then(resources => { res.status(200).json(resources); })
        .catch(next);
});

// POST
router.post('/', async (req, res, next) => {
    try {
        const { project_name, project_completed } = req.body;
        if (!project_name || !project_completed) {
            res.status(404).json({ message: 'Project Name and Completed are required' });
        } else {
            const project = await Project.pPost(req.body);
            res.status(201).json(project);
        }
    } catch (err) {
        next(err);
    }
});

// error catch-all
router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'Something went wrong in resources router',
        message: err.message,
        stack: err.stack,
    });
});

module.exports = router;
