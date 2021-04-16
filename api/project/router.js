// build your `/api/projects` router here
const pRouter = require('express').Router();
const Project = require('./model.js');

pRouter.get('/', async (req, res, next) => {
    try {
        const projects = await Project.pGet();
        res.status(200).json(projects);
    } catch (err) {
        next(err);
    }
});



module.exports = pRouter;
