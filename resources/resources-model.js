const db = require('../data/db-config');

module.exports = { add, find };

function add(resource) {
  return db('resources').insert(resource);
}

function find() {
  return db('resources');
}
