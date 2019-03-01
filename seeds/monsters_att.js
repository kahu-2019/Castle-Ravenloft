
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { id: 8, tactics: '/game_assets/monster_tactics/spider.js', att: 6, dmg: 2, miss_dmg: 1, special: null },
        { id: 9, tactics: '/game_assets/monster_tactics/spider.js', att: 11, dmg: 1, miss_dmg: null, special: 'slowed. Place adjacent to the hero' },
        { id: 10, tactics: '/game_assets/monster_tactics/skeleton.js', att: 7, dmg: 1, miss_dmg: null, special: null },
        { id: 11, tactics: '/game_assets/monster_tactics/skeleton.js', att: 9, dmg: 2, miss_dmg: null, special: null },
        { id: 12, tactics: '/game_assets/monster_tactics/kobold_skirmisher.js', att: 9, dmg: 1, miss_dmg: null, special: null },
        { id: 13, tactics: '/game_assets/monster_tactics/blazing_skeleton.js', att: 7, dmg: 2, miss_dmg: 1, special: null },
        { id: 14, tactics: '/game_assets/monster_tactics/wraith.js', att: 6, dmg: 3, miss_dmg: 1, special: null }
      ]);
    });
};
