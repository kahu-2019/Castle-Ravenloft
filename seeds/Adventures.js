
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('adventures').del()
    .then(function () {
      // Inserts seed entries
      return knex('adventures').insert([
        {
          adv_id: 1, adv_name: 'Escape the Tomb', flav_text: '"Heroes, alone in the dungeon crypts, must escape before the sun sets and Strahd returns...“', Goal: 'Find the Secret Stairway tile that leads out of the dungeon before Strahd defeats you!', spec_components: 'Strahd’s Crypt Dungeon Tile, Secret Stairway Dungeon Tile, Sun token, Strahd Villain Card, Strahd figure.', adv_setup: 'Place the Strahd’s Crypt tile on the table. Place the Hero on any square on the tile.', adv_rules: 'game_assets/adv_start_tiles/1.js', victory: 'You win the game when a Hero starts his or her turn on the Secret Stairway tile.', defeat: 'The Hero loses this adventure if he or she has 0 Hit Points at the start of his or her turn and there are no Healing Surge tokens remaining.', start_adv: 'You wake up alone in the depths of Castle Ravenloft. The last thing you remember was the man with the piercing eyes and long cape approached you on the dark street outside the inn. It had to be Count Strahd, the vampire! Outside the castle, you know that the sun is high in the sky. Now you have to find your way out of here before the sun sets and Strahd returns to finish whatever foul plot he began last night.', adv_reveal: 'Now the sun sets...Somewhere in the darkness behind you, you hear the sound of stone scrapping on stone.It must be the sound of Strahd’s coffin lid sliding open.The vampire lord has awakened...',
        },
        {
          adv_id: 2, adv_name: 'Find the Icon of Ravenloft ', flav_text: 'The Heroes must enter the depths of Castle Ravenloft and locate the one chamber untouched by the evil of the place—the Chapel.There, the Icon of Ravenloft waits to help end Strahd’s evil.', Goal: 'Find the hidden Chapel and recover the lost Icon of  Ravenloft.', spec_components: 'Start Dungeon Tile, two Hallway Dungeon Tiles, Chapel Dungeon Tile, Icon of Ravenloft Treasure Card, Icon of Ravenloft token.', adv_setup: 'Place the Start tile on the table. Place the two Hallway tiles adjacent to the Start tile. Place each Hero on a square adjacent to the stairway on the Start tile.', adv_rules: 'game_assets/adv_start_tiles/2.js', victory: 'The Heroes win this adventure when they destroy all of the Monsters placed on the Chapel and recover the Icon of Ravenloft.', defeat: 'The Heroes lose this adventure if any Hero has 0 Hit Points at the start of his or her turn and there are no Healing Surge tokens remaining.', start_adv: ' A cleric in Barovia has told you about the legend of the Icon of Ravenloft. He believes the artifact still exists, resting in the hidden Chapel deep within the castle.“The Chapel remains a safe haven, a place of goodness and light in all that terrible darkness the cleric explained.“If you can bring the icon Lo me.I can use it to defend the town from Strahd and his minions—and perhaps even find a way to destroy the vampire lord once and for all!” Now you stand at the bottom of the stairs leading into the dungeon crypts. The only thing between you and your goal—endless corridors of darkness and an army of of monsters!', adv_reveal: '',
        },
        { adv_id: 3, adv_name: '', flav_text: 'rowValue3', Goal: '', spec_components: '', adv_setup: '', adv_rules: '', victory: '', defeat: '', start_adv: '', adv_reveal: '', },
        { adv_id: 4, adv_name: '', flav_text: 'rowValue1', Goal: '', spec_components: '', adv_setup: '', adv_rules: '', victory: '', defeat: '', start_adv: '', adv_reveal: '', },
        { adv_id: 5, adv_name: '', flav_text: 'rowValue2', Goal: '', spec_components: '', adv_setup: '', adv_rules: '', victory: '', defeat: '', start_adv: '', adv_reveal: '', },
        { adv_id: 6, adv_name: '', flav_text: 'rowValue3', Goal: '', spec_components: '', adv_setup: '', adv_rules: '', victory: '', defeat: '', start_adv: '', adv_reveal: '', },
        { adv_id: 7, adv_name: '', flav_text: 'rowValue1', Goal: '', spec_components: '', adv_setup: '', adv_rules: '', victory: '', defeat: '', start_adv: '', adv_reveal: '', },
        { adv_id: 8, adv_name: '', flav_text: 'rowValue2', Goal: '', spec_components: '', adv_setup: '', adv_rules: '', victory: '', defeat: '', start_adv: '', adv_reveal: '', },
        { adv_id: 9, adv_name: '', flav_text: 'rowValue3', Goal: '', spec_components: '', adv_setup: '', adv_rules: '', victory: '', defeat: '', start_adv: '', adv_reveal: '', },
        { adv_id: 10, adv_name: '', flav_text: 'rowValue1', Goal: '', spec_components: '', adv_setup: '', adv_rules: '', victory: '', defeat: '', start_adv: '', adv_reveal: '', },
        { adv_id: 11, adv_name: '', flav_text: 'rowValue3', Goal: '', spec_components: '', adv_setup: '', adv_rules: '', victory: '', defeat: '', start_adv: '', adv_reveal: '', },
        { adv_id: 12, adv_name: '', flav_text: 'rowValue2', Goal: '', spec_components: '', adv_setup: '', adv_rules: '', victory: '', defeat: '', start_adv: '', adv_reveal: '', },
        { adv_id: 13, adv_name: '', flav_text: 'rowValue3', Goal: '', spec_components: '', adv_setup: '', adv_rules: '', victory: '', defeat: '', start_adv: '', adv_reveal: '', }
      ]);
    });
};
