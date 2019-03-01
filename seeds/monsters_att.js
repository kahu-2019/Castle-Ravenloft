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
          attack_name: "Rotting Fist",
          att: 5,
          dmg: 1,
          miss_dmg: null,
          special: "for each Monster on the Zombie's tile"
        },
        {
          id: 2,
          monster_id: 2,
          tactics: "/game_assets/monster_tactics/ghoul.js",
          attack_name: "Bite",
          att: 9,
          dmg: 3,
          miss_dmg: null,
          special: "null"
        },
        {
          id: 3,
          monster_id: 2,
          tactics: "/game_assets/monster_tactics/ghoul.js",
          attack_name: "Paralyzing Claw",
          att: 7,
          dmg: 1,
          miss_dmg: null,
          special: "immobilized"
        },
        {
          id: 4,
          monster_id: 3,
          tactics: "/game_assets/monster_tactics/wolf.js",
          attack_name: "Bite",
          att: 9,
          dmg: 2,
          miss_dmg: null,
          special: "null"
        },
        {
          id: 5,
          monster_id: 3,
          tactics: "/game_assets/monster_tactics/wolf.js",
          attack_name: "Pounce",
          att: 7,
          dmg: 1,
          miss_dmg: null,
          special: "slowed"
        },
        {
          id: 6,
          monster_id: 4,
          tactics: "/game_assets/monster_tactics/rat_swarm.js",
          attack_name: "Multitude of bites",
          att: 7,
          dmg: 1,
          miss_dmg: null,
          special: "null"
        },
        {
          id: 7,
          monster_id: 5,
          tactics: "/game_assets/monster_tactics/gargoyle.js",
          attack_name: "Whirlwind of claws",
          att: 8,
          dmg: 2,
          miss_dmg: 1,
          special: "Slowed"
        },
        { id: 8, tactics: '/game_assets/monster_tactics/spider.js', attack_name: "Venomous bite", monster_id: 6, att: 6, dmg: 2, miss_dmg: 1, special: null },
        { id: 9, tactics: '/game_assets/monster_tactics/spider.js', attack_name: "Acidic web", monster_id: 6, att: 11, dmg: 1, miss_dmg: null, special: 'slowed. Place adjacent to the hero' },
        { id: 10, tactics: '/game_assets/monster_tactics/skeleton.js', attack_name: "Scimitar", monster_id: 7, att: 7, dmg: 1, miss_dmg: null, special: null },
        { id: 11, tactics: '/game_assets/monster_tactics/skeleton.js', attack_name: "Charging slice", monster_id: 7, att: 9, dmg: 2, miss_dmg: null, special: null },
        { id: 12, tactics: '/game_assets/monster_tactics/kobold_skirmisher.js', attack_name: "Thrown javelin", monster_id: 8, att: 9, dmg: 1, miss_dmg: null, special: null },
        { id: 13, tactics: '/game_assets/monster_tactics/blazing_skeleton.js', attack_name: "Ball of fire", monster_id: 9, att: 7, dmg: 2, miss_dmg: 1, special: null },
        { id: 14, tactics: '/game_assets/monster_tactics/wraith.js', attack_name: "Life-draining claw", monster_id: 10, att: 6, dmg: 3, miss_dmg: 1, special: null }
      ])
    });
};
