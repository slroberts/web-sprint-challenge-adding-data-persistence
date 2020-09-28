exports.seed = function (knex) {
  // Inserts seed entries
  return knex('tasks').insert([
    {
      id: 1,
      task_description: 'Show mastery in adding data persistence topics.',
      task_notes: '',
      task_completed: false,
      project_id: 1,
    },
    {
      id: 2,
      task_description: 'Read documentation and watch resource videos',
      task_notes: '',
      task_completed: false,
      project_id: 2,
    },
  ]);
};
