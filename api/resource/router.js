// build your `/api/resources` router here
const rRouter = require('express').Router();
const Resource = require('./model.js');

rRouter.get('/', async (req, res, next) => {
    try {
        const resources = await Resource.rGet();
        res.status(200).json(resources);
    } catch (err) {
        next(err);
    }
});



module.exports = rRouter;
