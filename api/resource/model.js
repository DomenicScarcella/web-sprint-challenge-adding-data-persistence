// build your `Resource` model here
const db = require('../../data/dbConfig.js');

const rGet = () => {
    return db('resources');
};

const rPost = (r) => {
    return db('resources').insert(r);
};

module.exports = { rGet, rPost };
