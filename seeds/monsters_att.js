exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('monsters_att').del()
    .then(function () {
      // Inserts seed entries
      return knex("monsters_att").insert([
        {
          id: 1,
          monster_id: 1,
          tactics: "/game_assets/monster_tactics/zombie.js",
          att: 5,
          dmg: 1,
          miss_dmg: null,
          special: "for each Monster on the Zombie's tile"
        },
        {
          id: 2,
          monster_id: 2,
          tactics: "/game_assets/monster_tactics/ghoul.js",
          att: 9,
          dmg: 3,
          miss_dmg: null,
          special: "null"
        },
        {
          id: 3,
          monster_id: 2,
          tactics: "/game_assets/monster_tactics/ghoul.js",
          att: 7,
          dmg: 1,
          miss_dmg: null,
          special: "immobilized"
        },
        {
          id: 4,
          monster_id: 3,
          tactics: "/game_assets/monster_tactics/wolf.js",
          att: 9,
          dmg: 2,
          miss_dmg: null,
          special: "null"
        },
        {
          id: 5,
          monster_id: 3,
          tactics: "/game_assets/monster_tactics/wolf.js",
          att: 7,
          dmg: 1,
          miss_dmg: null,
          special: "slowed"
        },
        {
          id: 6,
          monster_id: 4,
          tactics: "/game_assets/monster_tactics/rat_swarm.js",
          att: 7,
          dmg: 1,
          miss_dmg: null,
          special: "null"
        },
        {
          id: 7,
          monster_id: 5,
          tactics: "/game_assets/monster_tactics/gargoyle.js",
          att: 8,
          dmg: 2,
          miss_dmg: 1,
          special: "Slowed"
        },
        { id: 8, tactics: '/game_assets/monster_tactics/spider.js', monster_id: 6, att: 6, dmg: 2, miss_dmg: 1, special: null },
        { id: 9, tactics: '/game_assets/monster_tactics/spider.js', monster_id: 6, att: 11, dmg: 1, miss_dmg: null, special: 'slowed. Place adjacent to the hero' },
        { id: 10, tactics: '/game_assets/monster_tactics/skeleton.js', monster_id: 7, att: 7, dmg: 1, miss_dmg: null, special: null },
        { id: 11, tactics: '/game_assets/monster_tactics/skeleton.js', monster_id: 7, att: 9, dmg: 2, miss_dmg: null, special: null },
        { id: 12, tactics: '/game_assets/monster_tactics/kobold_skirmisher.js', monster_id: 8, att: 9, dmg: 1, miss_dmg: null, special: null },
        { id: 13, tactics: '/game_assets/monster_tactics/blazing_skeleton.js', monster_id: 9, att: 7, dmg: 2, miss_dmg: 1, special: null },
        { id: 14, tactics: '/game_assets/monster_tactics/wraith.js', monster_id: 10, att: 6, dmg: 3, miss_dmg: 1, special: null }
      ])
    });
};
