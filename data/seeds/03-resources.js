exports.seed = function (knex) {
  // Inserts seed entries
  return knex('resources').insert([
    { id: 1, resource_name: 'Computer', resource_description: '' },
    { id: 2, resource_name: 'Whiteboard', resource_description: '' },
  ]);
};
