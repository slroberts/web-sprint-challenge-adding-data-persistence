const db = require('../data/db-config');

module.exports = [add, find];

function add(task) {
  return db('tasks').insert(task);
}

function find() {
  return db('task as t')
    .join('projects as p', 't.project_id', '=', 'p.id')
    .select(
      't.id',
      't.task_description',
      't.task_notes',
      'p.project_name',
      'p.p_description'
    );
}
