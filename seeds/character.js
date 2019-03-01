
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('character').del()
    .then(function () {
      // Inserts seed entries
      return knex('character').insert([
        {id: 1, name: 'Alisa', level:'1', subtitle:'Human Ranger', 
        description:'You are master of bow and blade with keen senses and dungeon skils you are determined to stop the evil of castle ravenloft', 
        AC:'15', HP:'8', Speed:'6', SurgeValue:'4'
      },
      {id: 2, name: 'Arjhan', level:'1', subtitle:'Dragonborn Fighter', 
        description:'You are a mighty warrior, born to a clan of draconic humanoids. You have never lost a battle, and you have come to drive evil out of the ruins of castle ravenloft', 
        AC:'17', HP:'10', Speed:'5', SurgeValue:'5'
      },
      {id: 3, name: 'Immeril', level:'1', subtitle:'Eladrin Wizard', 
      description:'You are a powerfull spellcaster from the magical lands of the Feywild. You seek arcane knowledge and magical treaure from the ruins of Castle Ravenloft.', 
      AC:'14', HP:'6', Speed:'6', SurgeValue:'3'},

      {id: 4, name: 'Kat', level:'1', subtitle:'Human Rouge', 
      description:'You are stealthy and sneaky, and a master of suddden strikes and quick escapes. You laugh at danger, and have come to Castle Ravenloft to satisfy your curiousity and aqquire treassure.', 
      AC:'14', HP:'8', Speed:'6', SurgeValue:'4'
    },
     {id: 5, name: 'Thorgrim', level:'1', subtitle:'Dwarf Cleric', 
    description:'You are a champion of the dwarven gods,m sent to eradicate the evil deep inside Castle Ravenloft', 
     AC:'17', HP:'10', Speed:'5', SurgeValue:'5'
  },



    


      ]);
    });
};
