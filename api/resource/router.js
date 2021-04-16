// build your `/api/resources` router here
const rRouter = require('express').Router();
const Resource = require('./model.js');

rRouter.get('/', (req, res, next) => {
    Resource.tGet()
        .then(resources => { res.status(200).json(resources); })
        .catch(next);
});



module.exports = rRouter;
