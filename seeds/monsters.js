exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("monsters")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("monsters").insert([
        {
          id: 1,
          name: "ZOMBIE",
          type: "UNDEAD",
          AC: 11,
          HP: 1,
          att1: 1,
          att2: 1,
          exp: 1
        },
        {
          id: 2,
          name: "GHOUL",
          type: "UNDEAD",
          AC: 16,
          HP: 1,
          att1: 2,
          att2: 3,
          exp: 2
        },
        {
          id: 3,
          name: "WOLF",
          type: "ANIMAL",
          AC: 14,
          HP: 1,
          att1: 4,
          att2: 5,
          exp: 1
        },
        {
          id: 4,
          name: "RAT_SWARM",
          type: "ANIMAL",
          AC: 12,
          HP: 1,
          att1: 6,
          att2: 6,
          exp: 1
        },
        {
          id: 5,
          name: "GARGOYLE",
          type: "ELEMENTAL",
          AC: 16,
          HP: 2,
          att1: 7,
          att2: 7,
          exp: 3
        }
      ]);
    });
};
