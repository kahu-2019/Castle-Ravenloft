exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('adv_trea_weap').del()
    .then(function () {
      // Inserts seed entries
      return knex('adv_trea_weap').insert([
        { id: 1, adv_trea_id: 2, att: 5, dmg: 3 },
        { id: 2, adv_trea_id: 3, att: 5, dmg: 3 },
        { id: 3, adv_trea_id: 4, att: 5, dmg: 1 },
        { id: 4, adv_trea_id: 7, att: 5, dmg: 3 }
      ]);
    });
};
