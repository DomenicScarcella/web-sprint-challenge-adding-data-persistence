// build your `Task` model here
const db = require('../../data/dbConfig.js');

const tGet = () => {
    return db('tasks');
};

const tPost = (t) => {
    return db('tasks').insert(t);
};

module.exports = { tGet, tPost };
