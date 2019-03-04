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
          exp: 1, image: 'images/monsterTokens/zombieToken.png',
        },
        {
          id: 2,
          name: "Ghoul",
          type: "Undead",
          AC: 16,
          HP: 1,
          exp: 2, image: 'images/monsterTokens/ghoulToken.png',
        },
        {
          id: 3,
          name: "Wolf",
          type: "Animal",
          AC: 14,
          HP: 1,
          exp: 1, image: 'images/monsterTokens/wolfToken.png',
        },
        {
          id: 4,
          name: "Rat swarm",
          type: "Animal",
          AC: 12,
          HP: 1,
          exp: 1, image: 'images/monsterTokens/ratToken.png',
        },
        {
          id: 5,
          name: "Gargoyle",
          type: "Elemental",
          AC: 16,
          HP: 2,
          exp: 3, image: 'images/monsterTokens/gargoyleToken.png',
        },
        { id: 6, name: 'Spider', type: 'Vermin', AC: 15, HP: 1,  exp: 2, image: 'images/monsterTokens/spiderToken.png', },
        { id: 7, name: 'Skeleton', type: 'Undead', AC: 16, HP: 1, exp: 2, image: 'images/monsterTokens/skeletonToken.png', },
        { id: 8, name: 'Kobold Skirmisher', type: 'Reptile', AC: 13, HP: 1, exp: 1, image: 'images/monsterTokens/koboldSkirmisherToken.png', },
        { id: 9, name: 'Blazing Skeleton', type: 'Undead', AC: 13, HP: 2, exp: 2, image: 'images/monsterTokens/blazingSkeletonToken.png', },
        { id: 10, name: 'Wraith', type: 'Undead', AC: 15, HP: 2, exp: 3, image: 'images/monsterTokens/wraithToken.png', },
      ]);
    });
};
