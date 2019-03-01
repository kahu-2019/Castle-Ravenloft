
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('villains').del()
    .then(function () {
      // Inserts seed entries
      return knex('villains').insert([
        { id: 1, Name: 'Klak, Kobold Sorcerer', Race: 'Reptile', AC: '14', HP: '6' },
        { id: 2, Name: 'Flesh Goolem', Race: 'Undead ', AC: '14', HP: '10' },
        { id: 3, Name: 'Howling Hag ', Race: 'Fey', AC: '15', HP: '10' },
        { id: 4, Name: 'Werewolf', Race: 'Animal', AC: '15', HP: '5' },
        { id: 5, Name: 'Zombie Dragon', Race: 'Undead', AC: '13', HP: '13' },
        { id: 6, Name: 'Young Vampire', Race: 'Undead', AC: '16', HP: '8' },
        { id: 7, Name: 'Zombie Dragon', Race: 'Undead', AC: '13', HP: '13' },
        { id: 8, Name: 'Gravestorm Dracolich', Race: 'Undead', AC: '14', HP: '20' },
        { id: 9, Name: 'Count Strahd Von Zaraovich', Race: 'Vampire', AC: '19', HP: '12' }
      ])
    });
};
