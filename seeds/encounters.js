// Encounter event types
// 0 - Event
// 1 - Event, attack
// 2 - Environment
// 3 - trap

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, evt_type: 0, name: 'Voice of the master', flavour: 'Strahd\'s voice echoes through the catacombs. "Slay them, my minions!" The monsters around you surge forward to attack', description:'Starting with the hero on your left, each Hero immediately activates one Monster they control. The first Hero that cannot activate a Monster instead places a new Monster on any tile'},
        {id: 2, evt_type: 0, name: 'Passage of time', flavour: 'The unholy air in Strahd\'s crypts saps the strength from you and your companions', description:'Each Hero takes 1 damage'},
        {id: 3, evt_type: 0, name: 'Passage of time', flavour: 'The unholy air in Strahd\'s crypts saps the strength from you and your companions', description:'Each Hero takes 1 damage'},
        {id: 4, evt_type: 0, name: 'Howl of the wolf', flavour: 'The distant baying of a wolf echoes through the dungeon, causing the monsters around you to shriek in response', description:'Choose one Monster on any Hero\'s tile. That Monster immediately activates'},
        {id: 5, evt_type: 0, name: 'Neglected passage', flavour: '"Did you look down that hall?"', description:'If a Start tile is not in play, discard this card and draw a nwe Encounter Card.\nDraw a tile frm the bottom of the Dungeon Tile stack and place it adjacent to the unexplored edge that is closest to the Start tile.\nPlace a new Monster on that tile. But do not draw an Encounter Card'},
        {id: 6, evt_type: 0, name: 'Spirit of doom', flavour: 'The entire crypt shuddered as though some gargantuan creature was moving deep below', description:'Each Hero can immediately move up to his or her Sped. After this moe each Hero on a tile with no Monsters takes 1 damage'},
        {id: 7, evt_type: 0, name: 'Overwhelming terror', flavour: 'A cacophony of shrieks and howls rises up around you and flee in terror.', description:'If a start tile is not in play, discard this card and draw a new Encounter Card.\nPlace each Hero 2 tiles closer to the same tile as a Monster after being placed. That Hero is Slowed'},
        {id: 8, evt_type: 0, name: 'Corner of your eye', flavour: 'You investigate something moving in the darkness.', description:'Place the active Hero on an adjacent tile and roll the die:\n1-15: A Monster rushes you from the darkness. Place a new Monster on the active Hero\'s tile.\n16-20: A friendly spirit inspires you to fight on. Flip up one of your used powers.'},
        {id: 9, evt_type: 0, name: 'Bubbling cauldron', flavour: 'The monsters around you rush forward, drawn by a repulsive odor spilling out of a bubbling cauldron', description:'Place each Monster 1 tile closer to the active hero'},
        {id: 10, evt_type: 0, name: 'Frenzy', flavour: 'The monsters around you roar in fury.', description:'Each Monster you control activates twice during your Villain phase'},
        {id: 11, evt_type: 0, name: 'Teleport glyph', flavour: 'An arcane symbol flashes at your feat and you disappear from sight.', description:'Place the active Hero and each Monster on his or her tile on the tile farthest from the active Hero'},
        {id: 12, evt_type: 0, name: 'Prowling spirits', flavour: 'Cold, spectral hands grasp at you. Before you can react, one of your items is gone.', description:'You must discard one of your Treasure Cards (of your choice)'},
        {id: 13, evt_type: 0, name: 'Strahd\'s minions', flavour: 'Strahd steps from the shadows and casts a spell', description:'Place the active Hero and the two Monsters that are closest to that Hero on the tile farthest from the active Hero.\nIf there are less than two Monsters in play, place a new Monster adjacent to the active Hero after he or she is placed'},
        {id: 14, evt_type: 0, name: 'Strahd\'s trick', flavour: 'Your mind reels as Strahd places a spell upon you. Your friends become enemies and your enemies become friends.', description:'Place the active Hero on a tile within 1 tile of you that has the most Monsters on it. If no tile within 1 tile of you has Monsters, the active Hero takes 1 damage.'},
        {id: 15, evt_type: 0, name: 'Lief lipsiege', flavour: 'A gnarled old man dressed as a clerk steps from the shadows. "I watch the master\'s treasure, At least, I do unless I\'m distracted."', description:'You try to distract Lief, Roll a die:\n1-10: You scare Lief and he calls for help. Place a new Monster on the active Hero\'s tile.\n11-20: Draw a treasure card.'},
        {id: 16, evt_type: 0, name: 'Frenzy', flavour: 'The monsters around you roar in fury.', description:'Each Monster you control activates twice during your Villain phase'},
        {id: 17, evt_type: 0, name: 'Strahd\'s whispers', flavour: 'Strahd\'s voice echoes in your mind, compelling you to turn against your friends.', description:'Place the active Hero adjacent to the next closest Hero. The active Hero attacks that Hero with an at-will power'},
        {id: 18, evt_type: 0, name: 'Ghost of prince Aurel', flavour: 'A ghost materialises in the corridor ahead; its horrid features freeze you in terror', description:'Flip over one unused Daily power or Utility power. If you don\'t have an unused power to flip over, take 1 damage instead'},
        {id: 19, evt_type: 0, name: 'Overrun', flavour: 'Monsters charge from all directions', description:'Each Hero takes damage equal to the number of Monsters they control'},
        {id: 20, evt_type: 0, name: 'Illusionary trick', flavour: 'Even allies aren\'t always what they appear to be!', description:'The active Hero swaps positions with the Monster that is farthest from them'},
        {id: 21, evt_type: 0, name: 'Secret door', flavour: 'A section of the stone wall slides away, revealing a hidden chamber', description:'Draw a tile from the bottom of the Dungeon Tile stack and place it adjacent to the unexplored edge that is closest to the active Hero.\nPlace a new Monster on that tile. BUt do not draw an Encounter Card'},
        {id: 22, evt_type: 0, name: 'Cowardly flight', flavour: 'A monster flees from you to seek help', description:'If there are no Monsters in play, discard this card.\nDraw a tile from the bottom of the Dungeon Tile stack and place it adjacent to the unexplored edge that is closest to the active Hero. Place the eMonster closest to the active Hero on tha tile, and place a new Monster on that tile. Do not draw an Encounter Card.'},
        {id: 23, evt_type: 0, name: 'Summoning circle', flavour: 'A careless misstep disturbs a magic rune, freeing a horrid creature', description:'Place a new Monster adjacent to the active Hero'},
        {id: 24, evt_type: 0, name: 'Overrun', flavour: 'Monsters charge from all directions!', description:'Each Hero takes damage equal to the number of Monsters he or she controls'},
        {id: 25, evt_type: 0, name: 'Neglected passage', flavour: '"Did you look down that hall?"', description:'If a Start tile is not in play, discard this card and draw a nwe Encounter Card.\nDraw a tile frm the bottom of the Dungeon Tile stack and place it adjacent to the unexplored edge that is closest to the Start tile.\nPlace a new Monster on that tile. But do not draw an Encounter Card'},
        {id: 26, evt_type: 0, name: 'Strahd\'s hunger', flavour: 'Vertigo washes over you as Strahd steps form the shadows. His will overwhelms you, and he laughs as he steps bak into the darkness', description:'Choose the hero with the most Hit Points remaining. That Hero takes 1 damage and is Immobilised'},
        {id: 27, evt_type: 0, name: 'Treasure chest', flavour: 'You find an ancient chest with a rusty lock', description:'You open a treasure chest. Roll a die:\n1-10: Take 2 damage.\n11-15: Take 1 damage and draw 1 Treasure Card.\n16-20: Draw 1 Treasure Card.'},
        {id: 28, evt_type: 0, name: 'Mists of terror', flavour: 'You hear a whispering chant, and a white mist flows through the crypts. As you breathe in the foul air, horrifying thoughts root you in place.', description:'Roll a die for each Hero. On a 1-5 the Hero takes 1 damage and is Immobilised'},
        {id: 29, evt_type: 0, name: 'Reinforcements', flavour: 'The constant advance of Strahd\'s minions gives you no time to relax.', description:'Choose the Hero controlling the fewest Monsters. That hero places a new Monster on any tile with an unexplored edge'},
        {id: 30, evt_type: 0, name: 'Cyrus belview', flavour: 'A gaunt, ghoulish looking man in a torn suit grins at you through yellowed teeth. "The master said we were expecting company. Allow me to escort you to your chambers."', description:'Draw a tile from the bottom of the Dungeon Tile stack and place it adjacent to any unexplored edge. Place two new Monster on that tile then place the active Hero on that tile. Each other Hero can place themselves on the active Hero\'s new tile.'},
        {id: 31, evt_type: , name: '', flavour: '', description:},
        {id: 32, evt_type: , name: '', flavour: '', description:},
        {id: 33, evt_type: , name: '', flavour: '', description:},
        {id: 34, evt_type: , name: '', flavour: '', description:},
        {id: 35, evt_type: , name: '', flavour: '', description:},
        {id: 36, evt_type: , name: '', flavour: '', description:},
        {id: 37, evt_type: , name: '', flavour: '', description:},
        {id: 38, evt_type: , name: '', flavour: '', description:},
        {id: 39, evt_type: , name: '', flavour: '', description:},
        {id: 40, evt_type: , name: '', flavour: '', description:},
        {id: 41, evt_type: , name: '', flavour: '', description:},
        {id: 42, evt_type: , name: '', flavour: '', description:},
        {id: 43, evt_type: , name: '', flavour: '', description:},
        {id: 44, evt_type: , name: '', flavour: '', description:},
        {id: 45, evt_type: , name: '', flavour: '', description:},
        {id: 46, evt_type: , name: '', flavour: '', description:},
        {id: 47, evt_type: , name: '', flavour: '', description:},
        {id: 48, evt_type: , name: '', flavour: '', description:},
        {id: 49, evt_type: , name: '', flavour: '', description:},
        {id: 50, evt_type: , name: '', flavour: '', description:},
        {id: 51, evt_type: , name: '', flavour: '', description:},
        {id: 52, evt_type: , name: '', flavour: '', description:},
        {id: 53, evt_type: , name: '', flavour: '', description:},
        {id: 54, evt_type: , name: '', flavour: '', description:},
        {id: 55, evt_type: , name: '', flavour: '', description:},
        {id: 56, evt_type: , name: '', flavour: '', description:},
        {id: 57, evt_type: , name: '', flavour: '', description:},
        {id: 58, evt_type: , name: '', flavour: '', description:},
        {id: 59, evt_type: , name: '', flavour: '', description:},
        {id: 60, evt_type: , name: '', flavour: '', description:},
    
      ]);
    });
};
