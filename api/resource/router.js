// build your `/api/resources` router here
const rRouter = require('express').Router();
const Resource = require('./model.js');

rRouter.get('/', (req, res, next) => {
    Resource.tGet()
        .then(resources => { res.status(200).json(resources); })
        .catch(next);
});




rRouter.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'Something went wrong in resources router',
        message: err.message,
        stack: err.stack,
    });
});

module.exports = rRouter;
