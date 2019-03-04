exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("monsters")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("monsters").insert([
        {
          id: 1,
          name: "Zombie",
          type: "Undead",
          AC: 11,
          HP: 1,
          exp: 1
        },
        {
          id: 2,
          name: "Ghoul",
          type: "Undead",
          AC: 16,
          HP: 1,
          exp: 2
        },
        {
          id: 3,
          name: "Wolf",
          type: "Animal",
          AC: 14,
          HP: 1,
          exp: 1
        },
        {
          id: 4,
          name: "Rat swarm",
          type: "Animal",
          AC: 12,
          HP: 1,
          exp: 1
        },
        {
          id: 5,
          name: "Gargoyle",
          type: "Elemental",
          AC: 16,
          HP: 2,
          exp: 3
        },
        { id: 6, name: 'Spider', type: 'Vermin', AC: 15, HP: 1,  exp: 2 },
        { id: 7, name: 'Skeleton', type: 'Undead', AC: 16, HP: 1, exp: 2 },
        { id: 8, name: 'Kobold Skirmisher', type: 'Reptile', AC: 13, HP: 1, exp: 1 },
        { id: 9, name: 'Blazing Skeleton', type: 'Undead', AC: 13, HP: 2, exp: 2 },
        { id: 10, name: 'Wraith', type: 'Undead', AC: 15, HP: 2, exp: 3 },
      ]);
    });
};
