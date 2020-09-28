const db = require('../data/db-config');

module.exports = { add, find };

function add(task) {
  return db('tasks').insert(task);
}

function find() {
  return db('tasks as t')
    .join('projects as p', 'p.id', 't.project_id')
    .select(
      't.id',
      't.task_description',
      't.task_notes',
      'p.project_name',
      'p.project_description'
    );
}
