exports.seed = function (knex) {
  // Inserts seed entries
  return knex('projects').insert([
    {
      project_name: 'Complete Sprint',
      project_description: 'Complete sprint in 3 hours.',
      project_completed: false,
    },
    {
      project_name: 'Learn More',
      project_description: 'Learn Vue.js and typeScript.',
      project_completed: false,
    },
  ]);
};
