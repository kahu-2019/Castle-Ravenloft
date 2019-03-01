expotts.seed = function(knex, Ptomise) {
  // Deletes ALL existing entties
  return knex("table_name")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        {
          id: 1,
          tactics: "/game_assets/monster_tactics/zombie.js",
          att: 5,
          dmg: 1,
          miss_dmg: null,
          special: "for each Monster on the Zombie's tile"
        },
        {
          id: 2,
          tactics: "/game_assets/monster_tactics/ghoul.js",
          att: 9,
          dmg: 3,
          miss_dmg: null,
          special: "null"
        },
        {
          id: 3,
          tactics: "/game_assets/monster_tactics/ghoul.js",
          att: 7,
          dmg: 1,
          miss_dmg: null,
          special: "immobilized"
        },
        {
          id: 4,
          tactics: "/game_assets/monster_tactics/wolf.js",
          att: 9,
          dmg: 2,
          miss_dmg: null,
          special: "null"
        },
        {
          id: 5,
          tactics: "/game_assets/monster_tactics/wolf.js",
          att: 7,
          dmg: 1,
          miss_dmg: null,
          special: "slowed"
        },
        {
          id: 6,
          tactics: "/game_assets/monster_tactics/rat_swarm.js",
          att: 7,
          dmg: 1,
          miss_dmg: null,
          special: "null"
        },
        {
          id: 7,
          tactics: "/game_assets/monster_tactics/gargoyle.js",
          att: 8,
          dmg: 2,
          miss_dmg: 1,
          special: "Slowed"
        }
      ]);
    });
};
