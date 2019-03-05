
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('villains').del()
    .then(function () {
      // Inserts seed entries
      return knex('villains').insert([
        { id: 1, name: 'Klak, Kobold Sorcerer', race: 'Reptile', ac: '14', hp: '6' },
        { id: 2, name: 'Flesh Goolem', race: 'Undead ', ac: '14', hp: '10' },
        { id: 3, name: 'Howling Hag ', race: 'Fey', ac: '15', hp: '10' },
        { id: 4, name: 'Werewolf', race: 'Animal', ac: '15', hp: '5' },
        { id: 5, name: 'Zombie Dragon', race: 'Undead', ac: '13', hp: '13' },
        { id: 6, name: 'Young Vampire', race: 'Undead', ac: '16', hp: '8' },
        { id: 7, name: 'Zombie Dragon', race: 'Undead', ac: '13', hp: '13' },
        { id: 8, name: 'Gravestorm Dracolich', race: 'Undead', ac: '14', hp: '20' },
        { id: 9, name: 'Count Strahd Von Zaraovich', race: 'Vampire', ac: '19', hp: '12' }
      ])
    });
};
