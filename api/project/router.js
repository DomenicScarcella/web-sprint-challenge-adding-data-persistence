// build your `/api/projects` router here
const pRouter = require('express').Router();
const Project = require('./model.js');

pRouter.get('/', (req, res, next) => {
    Project.tGet()
        .then(projects => { res.status(200).json(projects); })
        .catch(next);
});



module.exports = pRouter;
