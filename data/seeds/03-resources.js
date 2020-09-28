exports.seed = function (knex) {
  // Inserts seed entries
  return knex('resources').insert([
    { resource_name: 'Computer', resource_description: '' },
    { resource_name: 'Whiteboard', resource_description: '' },
  ]);
};
