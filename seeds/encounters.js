
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('villans').del()
    .then(function () {
      // Inserts seed entries
      return knex('villans').insert([
        {id: 1, name: 'rowValue1', race:'', AC:'', HP:''},
        {id: 1, name: 'rowValue1', race:'', AC:'', HP:''}, 
        {id: 1, name: 'rowValue1', race:'', AC:'', HP:''},
      ]);
    });
};
