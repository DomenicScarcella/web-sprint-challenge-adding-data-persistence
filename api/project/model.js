// build your `Project` model here
const db = require('../../data/dbConfig.js');

const pGet = () => {
    return db('projects');
};

const pPost = (p) => {
    return db('projects').insert(p);
};

module.exports = { pGet, pPost };
