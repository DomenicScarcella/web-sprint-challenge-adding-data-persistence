// build your `/api/projects` router here
const pRouter = require('express').Router();
const Project = require('./model.js');

pRouter.get('/', (req, res, next) => {
    Project.tGet()
        .then(projects => { res.status(200).json(projects); })
        .catch(next);
});




pRouter.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'Something went wrong in projects router',
        message: err.message,
        stack: err.stack,
    });
});

module.exports = pRouter;
