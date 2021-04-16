// build your server here and require it from index.js
const express = require('express');
const pRouter = require('./project/router.js');
const rRouter = require('./resource/router.js');
const tRouter = require('./task/router.js');

const server = express();

server.use(express.json());

server.use('/api/projects', pRouter);
server.use('/api/resources', rRouter);
server.use('/api/tasks', tRouter);

server.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'Something went wrong',
        message: err.message,
        stack: err.stack,
    });
});

module.exports = server;
