
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('treasure').del()
    .then(function () {
      // Inserts seed entries
      return knex('treasure').insert([
        {id: 1, type: 0, name: 'BURST OF SPEED', play_imm: true, action: 'Your Hero can move his or her speed.', discard: 0, att: null, dmg: null,},
        {id: 2, type: 0, name: 'LUCKY FIND', play_imm: true, action: 'Draw three Treasure Cards and keep one. Discard the others.', discard: 0, att: null, dmg: null},
        {id: 3, type: 1, name: 'REJUVENATING ONSLAUGHT', play_imm: true, action: 'Until the end of your next Hero Phase, whenever a Hero hits a Monster with an attack, that Hero regains 1 Hit Point.', discard: 1, att: null, dmg: null},
        {id: 4, type: 1, name: 'SURROUND THEM!', play_imm: true, action: 'Until the end of your next Hero Phase, each Hero gains a bonus to attack rolls equal to the number of Heroes on his or her tile. ', discard: 1, att: null, dmg: null},
        {id: 5, type: 2, name: 'CRYSTAL BALL', play_imm: false, action: 'Reveal the top card of ny card deck or the top tile of any tile stack.', discard: 0, att: null, dmg: null},
        {id: 6, type: 2, name: 'WAND OF TELEPORTATION', play_imm: false, action: 'Choose a tile within 1 tile of you. Place each Monster on the chosen tile on a tile within 3 tiles of you.', discard: 0, att: null, dmg: null},
        {id: 7, type: 0, name: 'INTIMIDATING BELLOW', play_imm: true, action: 'Place one Monster on a tile 2 tiles away from its tile.', discard: 0, att: null, dmg: null},
        {id: 8, type: 2, name: 'LUCKY CHARM', play_imm: false, action: 'Reroll the die.', discard: 0, att: null, dmg: null},
        {id: 9, type: 2, name: 'RING OF ACCURACY', play_imm: true, action: "You gain a +1 bonus to attack rolls against Monsters that aren't adjacent to your Hero while this item is in play.", discard: 2, att: null, dmg: null},
        {id: 10, type: 0, name: 'EAGLE EYES', play_imm: true, action: 'Place 1 tile from the top of the Dungeon Tile stack adjacent to any unexplored edge. Place any new Monsters on that tile as normal, but do not draw an Encounter Card.', discard: 0, att: null, dmg: null},
        {id: 11, type: 0, name: 'CLEAR THE AIR', play_imm: true, action: 'Discard an Environment Card in play.', discard: 0, att: null, dmg: null},
        {id: 12, type: 2, name: 'MAGIC SWORD', play_imm: true, action: 'You gain a +1 bonus to attack rolls against adjacent Monsters while this item is in play.', discard: 2, att: null, dmg: null},
        {id: 13, type: 0, name: "MOMENT'S RESPITE", play_imm: true, action: 'Place this card face up on top of either the Encounter deck or the Monster deck. The next time a card would be drawn from the chosen deck, discard this card instead', discard: 0, att: null, dmg: null},
        {id: 14, type: 0, name: 'SHAKE IT OFF', play_imm: true, action: 'Choose one Hero. That Hero can end one Condition affecting him or her.', discard: 0, att: null, dmg: null},
        {id: 15, type: 0, name: 'BREATH OF LIFE', play_imm: true, action: 'Your Hero regains 1 Hit Point', discard: 0, att: null, dmg: null},
        {id: 16, type: 0, name: 'BREATH OF LIFE', play_imm: true, action: 'Your Hero regains 1 Hit Point', discard: 0, att: null, dmg: null},
        {id: 17, type: 0, name: 'BREATH OF LIFE', play_imm: true, action: 'Your Hero regains 1 Hit Point', discard: 0, att: null, dmg: null},
        {id: 18, type: 0, name: 'SHORT REST', play_imm: true, action: 'Flip up one of your used powers.', discard: 0, att: null, dmg: null},
        {id: 19, type: 2, name: 'GLYPH OF WARDING', play_imm: false, action: 'Place the Glyph of Warding marker on your tile. The first Monster that moves to that tile takes 1 damage.', discard: 0, att: null, dmg: null},
        {id: 20, type: 2, name: 'LUCKY CHARM', play_imm: false, action: 'Reroll the die.', discard: 0, att: null, dmg: null},
        {id: 21, type: 2, name: 'HOLY AVENGER', play_imm: true, action: 'You gain a +1 bonus to attack rolls against adjacent Monsters while this item is in play. Increase the bonus to +3 against Undead Monsters.', discard: 2, att: null, dmg: null},
        {id: 22, type: 0, name: 'DISTANT SOUNDS', play_imm: true, action: 'Look at the top 3 cards of the Monster deck and put them back on the top of the deck in any order.', discard: 0, att: null, dmg: null},
        {id: 23, type: 2, name: 'RING OF REGENERATION', play_imm: false, action: 'You can regain 1 Hit Point instead of drawing the Treasure Card.', discard: 2, att: null, dmg: null},
        {id: 24, type: 1, name: 'HEROIC STAND', play_imm: true, action: 'Until the end of your next Hero Phase, each Hero gains a bonus to attack rolls equal to the number of Monsters on his or her tile.', discard: 1, att: null, dmg: null},
        {id: 25, type: 0, name: 'DAZE', play_imm: true, action: 'Put this card face up on a Monster Card. The next time that Monster would activate, discard this card instead.', discard: 0, att: null, dmg: null},
        {id: 26, type: 2, name: "THIEVES'TOOLS", play_imm: true, action: 'You gain a +4 bonus to rolls to disable Traps while this item is in play.', discard: 2, att: null, dmg: null},
        {id: 27, type: 2, name: 'POTION OF REJUVENTAION', play_imm: 1, action: 'Flip up one of your used powers.', discard: 0, att: null, dmg: null},
        {id: 28, type: 2, name: "DRAGON'S BREATH ELIXIR", play_imm: false, action: 'Attack each Monster on your tile. This attack does not count as an attack action.', discard: 0, att: 4, dmg: 1},
        {id: 29, type: 1, name: 'RUN!', play_imm: true, action: 'Until the end of your next Hero Phase, each Hero gains +2 Speed.', discard: 1, att: null, dmg: null},
        {id: 30, type: 0, name: 'SHORT REST', play_imm: true, action: 'Flip up one of your used powers.', discard: 0, att: null, dmg: null},
        {id: 31, type: 0, name: 'LEVEL UP', play_imm: true, action: 'You can spend 5 experience Points to have your Hero become 2nd level.', discard: 0, att: null, dmg: null},
        {id: 32, type: 2, name: 'SCROLL OF TELEPORTATION', play_imm: false, action: 'Choose any number of Heroes on your tile and place them on another tile.', discard: 0, att: null, dmg: null},
        {id: 33, type: 2, name: 'POTION OF HEALING', play_imm: false, action: 'You or an adjacent Hero regains 2 Hit Points.', discard: 0, att: null, dmg: null},
        {id: 34, type: 0, name: 'LUCKY FIND', play_imm: true, action: 'Draw three Treasure Cards and keep one. Discard the others.', discard: 0, att: null, dmg: null},
        {id: 35, type: 2, name: 'NECKLACE OF FIREBALLS', play_imm: false, action: 'Attack each Monster on a tile 1 tile away from you.', discard: 1, att: 5, dmg: 1},
        {id: 36, type: 2, name: 'HOLY WATER', play_imm: false, action: 'Choose an Undead Monster within 1 tile of you. It takes 1 damage.', discard: 0, att: null, dmg: null},
        {id: 37, type: 2, name: 'AMULET OF PROTECTION', play_imm: true, action: 'You gain a +1 binus to AC while this item is in play.', discard: 2, att: null, dmg: null},
        {id: 38, type: 2, name: 'LUCKY CHARM', play_imm: false, action: 'Reroll the die.', discard: 0, att: null, dmg: null},
        {id: 39, type: 2, name: 'POTION OF HEALING', play_imm: false, action: 'You or an adjacent Hero regains 2 Hit Points.', discard: 0, att: null, dmg: null},
        {id: 40, type: 1, name: 'GUIDED STRIKES', play_imm: true, action: 'Until the end of your next Hero Phase, each Hero gains a 2+ bonus to attack rolls.', discard: 1, att: null, dmg: null},
        {id: 41, type: 2, name: 'BOOTS OF STRIDING', play_imm: true, action: 'You gain a +1 bonus to Speed while this item is in play.', discard: 2, att: null, dmg: null},
        {id: 42, type: 0, name: 'GLIMPSE OF THE FUTURE', play_imm: true, action: 'Look at the top 3 cards of the Encounter deck and put them back on the top of the deck in any order.', discard: 0, att: null, dmg: null},
        {id: 43, type: 0, name: 'ACTION SURGE', play_imm: true, action: 'You can move your speed or make an attack.', discard: 0, att: null, dmg: null},
        {id: 44, type: 0, name: 'HARROWED EXPERIENCE', play_imm: true, action: 'This card counts as 1 Experience Point Put it in the XP Pile, and discard this card whenthe party uses it for Experience.', discard: 0, att: null, dmg: null},
        {id: 45, type: 0, name: 'HARROWED EXPERIENCE', play_imm: true, action: 'This card counts as 1 Experience Point Put it in the XP Pile, and discard this card whenthe party uses it for Experience.', discard: 0, att: null, dmg: null}
      ]);
    });
};