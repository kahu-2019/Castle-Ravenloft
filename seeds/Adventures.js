
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('adventures').del()
    .then(function () {
      // Inserts seed entries
      return knex('adventures').insert([
        {
          adv_id: 1, adv_name: 'Escape the Tomb', flav_text: '"Heroes, alone in the dungeon crypts, must escape before the sun sets and Strahd returns...“', Goal: 'Find the Secret Stairway tile that leads out of the dungeon before Strahd defeats you!', spec_components: 'Strahd’s Crypt Dungeon Tile, Secret Stairway Dungeon Tile, Sun token, Strahd Villain Card, Strahd figure.', adv_setup: 'Place the Strahd’s Crypt tile on the table. Place the Hero on any square on the tile.', adv_rules: 'game_assets/adv_start_tiles/1.js', victory: 'You win the game when a Hero starts his or her turn on the Secret Stairway tile.', defeat: 'The Hero loses this adventure if he or she has 0 Hit Points at the start of his or her turn and there are no Healing Surge tokens remaining.', start_adv: 'You wake up alone in the depths of Castle Ravenloft. The last thing you remember was the man with the piercing eyes and long cape approached you on the dark street outside the inn. It had to be Count Strahd, the vampire! Outside the castle, you know that the sun is high in the sky. Now you have to find your way out of here before the sun sets and Strahd returns to finish whatever foul plot he began last night.', adv_reveal: 'Now the sun sets...Somewhere in the darkness behind you, you hear the sound of stone scrapping on stone.It must be the sound of Strahd’s coffin lid sliding open.The vampire lord has awakened...',
        },
        { adv_id: 2, adv_name: '', flav_text: 'rowValue2', Goal: '', spec_components: '', adv_setup: '', adv_rules: '', victory: '', defeat: '', start_adv: '', adv_reveal: '', },
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
