exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("monsters")
    .del()
    .then(function () {
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
        },
        { id: 6, name: 'Spider', type: 'Vermin', AC: 15, HP: 1, att1: 8, att2: 9, exp: 2 },
        { id: 7, name: 'Skeleton', type: 'Undead', AC: 16, HP: 1, att1: 10, att2: 11, exp: 2 },
        { id: 8, name: 'Kobold Skirmisher', type: 'Reptile', AC: 13, HP: 1, att1: 12, att2: null, exp: 1 },
        { id: 9, name: 'Blazing Skeleton', type: 'Undead', AC: 13, HP: 2, att1: 13, att2: null, exp: 2 },
        { id: 10, name: 'Wraith', type: 'Undead', AC: 15, HP: 2, att1: 14, att2: null, exp: 3 },
      ]);
    });
};
