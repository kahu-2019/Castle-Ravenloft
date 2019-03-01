
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('adv_treasure').del()
    .then(function () {
      // Inserts seed entries
      return knex('adv_treasure').insert([
        {id: 1, name: 'ICON OF RAVENLOFT', use_item: 1, desc: 'Choose one: Each Hero regains 2 Hit Points; or one Hero regains all of his or her Hit Points.', discard: 1},
        {id: 2, name: 'WOODEN STAKE', use_item: 2, desc: 'Attack one adjacent Vampire. Hit or miss, the Vampire does not activate during your next Villain Phase.', discard: 1},
        {id: 3, name: 'WOODEN STAKE', use_item: 2, desc: 'Attack one adjacent Vampire. Hit or miss, the Vampire does not activate during your next Villain Phase.', discard: 1},
        {id: 4, name: 'TORCH', use_item: 2, desc: 'Attack each Monster on your tile. Hit or miss, place each Monster on your tile on a tile within 1 tile of you.', discard: 1},
        {id: 5, name: 'HOLY SYMBOL OF RAVENKIND', use_item: 2, desc: 'Choose one Undead Monster on your tile. It takes 2 damage.', discard: 1},
        {id: 6, name: 'SUNSWORD', use_item: 0, desc: 'You deal +1 damage against adjacent Vampires while this item is in play.', discard: 0},
        {id: 7, name: 'SILVER DAGGER', use_item: 1, desc: 'Attack one Werewolf within 2 tiles of you. Hit or miss, the Werewolf no longer regains Hit Points from its Regeneration ability for the rest of the game.', discard: 1},
        {id: 8, name: 'TOME OF STRAHD', use_item: 0, desc: 'You and each Hero within 1 tile of you gain a +2 bonus to attack rolls against Vampires while this this item is in play.', discard: 0},
        {id: 9, name: 'FEYWALK AMULET', use_item: 0, desc: 'While this item is in play, whenever a power or effect teleports your Hero, you can choose any square on any tile as the destination square.', discard: 0},
        {id: 10, name: 'DIMENSIONAL SHACKLES', use_item: 1, desc: 'Choose one adjacent Monster. For the rest of the game, that Monster takes 1 damage whenever it teleports', discard: 1}
      ]);
    });
};
