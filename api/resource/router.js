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
        const { resource_name } = req.body;
        if (!resource_name) {
            res.status(404).json({ message: 'Resource Name is required' });
        } else {
            const resource = await Resource.rPost(req.body);
            res.status(201).json(resource);
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
