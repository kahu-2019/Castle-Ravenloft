
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('villains').del()
    .then(function () {
      // Inserts seed entries
      return knex('villains').insert([
        { id: 1, Name: 'Klak, Kobold Sorcerer', Race: 'Reptile', ac: '14', hp: '6' },
        { id: 2, Name: 'Flesh Goolem', Race: 'Undead ', ac: '14', hp: '10' },
        { id: 3, Name: 'Howling Hag ', Race: 'Fey', ac: '15', hp: '10' },
        { id: 4, Name: 'Werewolf', Race: 'Animal', ac: '15', hp: '5' },
        { id: 5, Name: 'Zombie Dragon', Race: 'Undead', ac: '13', hp: '13' },
        { id: 6, Name: 'Young Vampire', Race: 'Undead', ac: '16', hp: '8' },
        { id: 7, Name: 'Zombie Dragon', Race: 'Undead', ac: '13', hp: '13' },
        { id: 8, Name: 'Gravestorm Dracolich', Race: 'Undead', ac: '14', hp: '20' },
        { id: 9, Name: 'Count Strahd Von Zaraovich', Race: 'Vampire', ac: '19', hp: '12' }
      ])
    });
};
