exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('character').del()
    .then(function () {
      // Inserts seed entries
      return knex('character').insert([
        {
          id: 1, name: 'Alisa', level: 1, subtitle: 'Human Ranger',
          image: 'images/icons/Alisa.jpg',
          description: 'You are master of bow and blade, with keen senses and dungeon skils. You are determined to stop the evil of castle ravenloft',
          AC: 15, HP: 8, Speed: 6, SurgeValue: 4, ability: "SCOUT: You are a master explorer. During your exploration phase, you can explore one unexplored edge on your tile, even if you aren't adjacent to it. "
        },
        {
          id: 2, name: 'Arjhan', level: 1, subtitle: 'Dragonborn Fighter',
          image: 'images/icons/Arjhan.jpg',
          description: 'You are a mighty warrior, born to a clan of draconic humanoids. You have never lost a battle, and you have come to drive evil out of castle ravenloft',
          AC: 17, HP: 10, Speed: 5, SurgeValue: 5, ability: "DEFENDER:You protect your friends. While another hero is on the same tile as you, he or she gains a +1 bonus to AC"
        },
        {
          id: 3, name: 'Immeril', level: 1, subtitle: 'Eladrin Wizard',
          image: 'images/icons/Immeril.jpg',
          description: 'You are a powerfull spellcaster from the magical lands of the Feywild. You seek knowledge and magical treaure from the ruins of Castle Ravenloft.',
          AC: 14, HP: 6, Speed: 6, SurgeValue: 3, ability: "LORE: You know the secrets of Monsters. While another hero is on the same tile as you, he or she gains a +1 bonus to attack rolls."
        },

        {
          id: 4, name: 'Kat', level: 1, subtitle: 'Human Rouge',
          image: 'images/icons/Kat.jpg',
          description: 'You are stealthy and sneaky. You laugh at danger, and have come to Castle Ravenloft to satisfy your curiousity and aqquire treassure.',
          AC: 14, HP: 8, Speed: 6, SurgeValue: 4, ability: "TRAP EXPERT: You are an expert at finding and disabling traps. You gain a +5 bonus to rolls to disable traps."
        },
        {
          id: 5, name: 'Thorgrim', level: 1, subtitle: 'Dwarf Cleric',
          image: 'images/icons/Thorgrim.jpg',
          description: 'You are a champion of the dwarven gods, sent to eradicate the evil deep inside Castle Ravenloft',
          AC: 17, HP: 10, Speed: 5, SurgeValue: 5, ability: "AID: You know healing techniques. At tne end of your hero phase, if you did not attack, the other one hero on your tile regains 1 HP"
        }
      ]);
    });
};
