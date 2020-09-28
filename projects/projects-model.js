const db = require('../data/db-config');

module.exports = [add, find];

function add(project) {
  return db('projects').insert(project);
}

function find() {
  return db('projects');
}
