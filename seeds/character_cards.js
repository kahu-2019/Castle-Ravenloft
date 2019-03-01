
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('character_cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('character_cards').insert([
        {id: 1, character_id: 1, type:'utility power', title:'Healing Word', subtitle:'You whisper a brief prayer, and a divine healing light washes over your companion.', instruction_1:'Use this power during your Hero Phase', instruction_2:'One hero regains Hit Points equal to his or her healing surge value', attack:null, damage:null, miss:null},
        {id: 3, character_id: 1, type:'utility power', title:'Bless', subtitle:'You call forth a holy blessing for you and your companions.', instruction_1:'Use this power during your Hero Phase', instruction_2:'Each Hero within 1 tile of you gains a +2 bonus to attack rolls until the end of your next Hero Phase', attack:null, damage:null, miss:null},
        {id: 2, character_id: 1, type:'utility power', title:'Consecrated Ground', subtitle:'You sanctify the ground around you, warding it from evil', instruction_1:'Use this power during your Hero Phase instead of attacking', instruction_2:'Choose a tile within 1 tile of you. If there is a marker on that tile, discard it. Place the Consecrated Ground marker on the chosen tile. The next time you would place an Encounter marker on that tile, discard that Encounter Card and do not draw the new Encounter Card. Then discard the Consecrated Ground marker', attack:null, damage:null, miss:null},
        {id: 4, character_id: 1, type:'utility power', title:'Shield of Faith', subtitle:'Divine energy protects you and your companions', instruction_1:'Use when you or a Hero on your tile is hit by an attack', instruction_2:'The attack misses instead. You and each Hero within 1 tile of you gains a +2 bonus to AC until the end of your next Hero Phase', attack:null, damage:null, miss:null},
        {id: 5, character_id: 1, type:'At-Will-Power', title:'Divine Flare', subtitle:'The light of your deity scorches your foe and empowers your ally', instruction_1:'Attack one Monster on your tile', instruction_2:'If you hit, end one Condition on a Hero on your tile', attack:6, damage:1, miss:0},
        {id: 6, character_id: 1, type:'At-Will-Power', title:'Healing Strike', subtitle:'You smite your foe and heal a nearby companion', instruction_1:'Attack one adjacent Monster', instruction_2:'if you hit, choose one hero within 1 tile of you. That Hero regains 1 hit Point', attack:8, damage:1, miss:0},
        {id: 7, character_id: 1, type:'At-Will-Power', title:'Lance of Faith', subtitle:'You sear your foe with a brilliant ray of Golden radiance', instruction_1:'Attack one Monster within 1 tile of you', instruction_2:'If the Monster is Undead, you deal +1 damage with this attack', attack:6, damage:1, miss:0},
        {id: 8, character_id: 1, type:'Daily-Power', title:'Beacon of Hope', subtitle:'You blast your foes with radiant light and your allies are heartened by the attack', instruction_1:'Choose a tile within 1 tile of you. Attack each Monster on that tile', instruction_2:'Each Hero on the chosen tile regains 1 Hit point.', attack:6, damage:2, miss:0},
        {id: 9, character_id: 1, type:'Daily-Power', title:'Flame Strike', subtitle:'A column of flame engulfs your foes', instruction_1:'Choose a tile within 2 tiles of you. Attack each Monster on that tile', instruction_2:'', attack:6, damage:3, miss:1},
        {id: 10, character_id: 1, type:'Daily-Power', title:'Hallowed Advance', subtitle:'The power of your god inspires your allies to action', instruction_1:'Attack one adjacent Monster', instruction_2:'Hit or miss, each other Hero can move 1 tile', attack:5, damage:3, miss:1},
        {id: 11, character_id: 2, type:'utility power', title:'Stealth', subtitle:'Your silent advance avoids unwanted attention', instruction_1:'Use this power immediately after you draw a Monster Card', instruction_2:'Discard the Monster Card instead of placing it', attack:null, damage:null, miss:null},
        {id: 12, character_id: 2, type:'utility power', title:'Spring Away', subtitle:' You sense trouble coming and move away before it catches you', instruction_1:'Use this power when another Hero draws an Encounter Card', instruction_2:'Place your Hero on a tile 2 tiles away from you before the Encounter Card triggers', attack:null, damage:null, miss:null},
        {id: 13, character_id: 2, type:'utility power', title:'Great Leap', subtitle:'You get a running start and leap a great distance', instruction_1:'Use this power during your Hero Phase instead of moving', instruction_2:'Place your Hero on a tile within 2 tiles of you', attack:null, damage:null, miss:null},
        {id: 14, character_id: 2, type:'utility power', title:'Sneak Attack', subtitle:'You emerge from the shadows and position yourself to deliver a powerful strike to your enemy.', instruction_1:'Use this power at the start of your Hero Phase', instruction_2:'You gain a +4 bonus to attack rolls and deal +1 damage until the end of your next Hero Phase', attack:null, damage:null, miss:null},
        {id: 15, character_id: 2, type:'At-Will-Power', title:'Backstab', subtitle:'You strike from the shadows', instruction_1:'Attack one adjacent Monster', instruction_2:'On a hit, you deal +1 damage if the Monster is adjacent to another Hero.', attack:7, damage:1, miss:0},
        {id: 16, character_id: 2, type:'At-Will-Power', title:'Deft Strike', subtitle:'A final lunge outs you in an advantageous position', instruction_1:'Before the attack, you can move 2 squares. Attack one adjacent Monster', instruction_2:'', attack:7, damage:1, miss:0},
        {id: 17, character_id: 2, type:'At-Will-Power', title:'Snipe Shot', subtitle:'You hurl your dagger from a place of safety', instruction_1:'Attack one monster within 1 tile of you.', instruction_2:'You gain a +2 bonus to the attack roll if the Monster is 1 tile away from you', attack:7, damage:1, miss:0},
        {id: 18, character_id: 2, type:'Daily-Power', title:'Dagger Barrage', subtitle:'Choose a tile within 1 tile of you. Attack each monster on that tile', instruction_1:'', instruction_2:'', attack:7, damage:2, miss:1},
        {id: 19, character_id: 2, type:'Daily-Power', title:'Riposte Strike', subtitle:"Your foe's attack leaves it open to a counterattack", instruction_1:'Use this power immediately after an adjacent Monster attacks you. Attack that Monster', instruction_2:'If you miss, do not flip this card over', attack:7, damage:1, miss:0},
        {id: 20, character_id: 2, type:'Daily-Power', title:'Deep Cut', subtitle:'A well-timed slice incapacitates your enemy', instruction_1:'Attack one adjacent Monster', instruction_2:'Hit or miss, if the Monster is adjacent to another Hero, it takes 2 damage', attack:7, damage:2, miss:0},
        {id: 21, character_id: 3, type:'utility power', title:'Crucial Aid', subtitle:'You help a companion in great need', instruction_1:'Use this power after another Hero rolls the die', instruction_2:'That hero gains a +4 bonus to that die roll', attack:null, damage:null, miss:null},
        {id: 22, character_id: 3, type:'utility power', title:'Unbalancing Parry', subtitle:'You block an attack and slide your enemy away from you', instruction_1:'Use this power when an adjacent Monster hits you', instruction_2:'The attack misses instead. Place that Monster within 1 tile of you', attack:null, damage:null, miss:null},
        {id: 23, character_id: 3, type:'utility power', title:'Yield Ground', subtitle:'You leap to a safer position after suffering an attack', instruction_1:'Use this power when a Monster damages you', instruction_2:'You move your speed', attack:null, damage:null, miss:null},
        {id: 24, character_id: 3, type:'At-Will-Power', title:'Twin Shot', subtitle:'Your fire two arrows in the space of a breath', instruction_1:'Attack two Monsters within 1 tile of you', instruction_2:'', attack:4, damage:1, miss:0},
        {id: 25, character_id: 3, type:'At-Will-Power', title:'Hit and Run', subtitle:'You quickly strike and then retreat to safer ground', instruction_1:'Attack one adjacent Monster', instruction_2:'Hit or Miss, you can place your Hero on any square on your tile', attack:6, damage:2, miss:1},
        {id: 26, character_id: 3, type:'At-Will-Power', title:"Hunter's shot", subtitle:'You take aim at your prey and fire your bow', instruction_1:'Attack one Monster within 2 tiles of you', instruction_2:'If you miss and the Monster is more that 1 tile away from you, place it 1 tile closer to you', attack:6, damage:1, miss:0},
        {id: 27, character_id: 3, type:'At-Will-Power', title:'Careful attack', subtitle:'You study your enemy, looking for a gap in its defenses. Only when you find it do you strike', instruction_1:'One adjacent Monster takes 1 damage', instruction_2:'', attack:20, damage:1, miss:1},
        {id: 28, character_id: 3, type:'Daily-Power', title:'Attacks on the run', subtitle:'You run through your enemies, striking twice as you go', instruction_1:'Move your speed. Attack two Monsters that you were adjacent to during the movement', instruction_2:'', attack:4, damage:2, miss:1},
        {id: 29, character_id: 3, type:'Daily-Power', title:'Split the tree', subtitle:'You fire two arrows at once, which strike two different Monsters', instruction_1:'Choose a tile within 2 tiles of you. Attack two Monsters on that tile', instruction_2:'If you miss and that Monster is more than 1 tile away from you, place it 1 tile closer to you.', attack:6, damage:2, miss:1},
        {id: 30, character_id: 3, type:'Daily-Power', title:'Bounding Attack', subtitle:'You swiftly move to your foe and strike', instruction_1:'Place your Hero on a tile within 1 tile of you. Attack one adjacent Monster', instruction_2:'', attack:6, damage:3, miss:1},
        {id: 31, character_id: 4, type:'utility power', title:'Fey Step', subtitle:'You step through the arcane mists to appear in a different location', instruction_1:'Use this power during your Hero Phase', instruction_2:'Place your Hero on a tile within 1 tile of you', attack:null, damage:null, miss:null},
        {id: 32, character_id: 4, type:'utility power', title:'Shield', subtitle:'You throw up your hand, and a shield of arcane energy protects you from attack', instruction_1:'Use this power when a Monster hits you', instruction_2:"The Monster's attack misses instead. You gain a +2 bonus to AC until the end of your next Hero Phase", attack:null, damage:null, miss:null},
        {id: 33, character_id: 4, type:'utility power', title:'Illusionary Crowd', subtitle:'You create an illusionary crowd of defenseless people to draw the monsters away from you', instruction_1:'Use this power during your Hero Phase', instruction_2:'Place the Illusionary Crowd marker on a tile without a marker. Place each Monster on a tile 1 away from the Illusionary Crowd tile. The Illusionary Crowd counts as a Hero when a Monster chooses a target. The Illusionary Crowd has ac 14 and 1 HP. Remove the Illusionary Crowd marker when it is damaged', attack:null, damage:null, miss:null},
        {id: 34, character_id: 4, type:'utility power', title:'Dispel Magic', subtitle:'You assert your will over the magic of the area negating its effects', instruction_1:'Use when you draw an Encounter Card', instruction_2:'Cancel that Encounter Card', attack:null, damage:null, miss:null},
        {id: 35, character_id: 4, type:'At-Will-Power', title:'Scorching Burst', subtitle:'You create a vertical column if golden flames that burns all within it', instruction_1:'Chose a tile 1 away from you. Attack each Monster on that tile', instruction_2:'', attack:7, damage:1, miss:0},
        {id: 36, character_id: 4, type:'At-Will-Power', title:'Thunderwave', subtitle:'You create a wave of sonic power that lashes your enemies', instruction_1:'Attack each Monster on your tile', instruction_2:'After the attack, choose a tile within 1 tile of you. Place each Monster on your tile on the chosen tile', attack:7, damage:1, miss:0},
        {id: 37, character_id: 4, type:'At-Will-Power', title:'Magic Missile', subtitle:'You launch a silvery bolt of energy at a Monster', instruction_1:'Attack one Monster within 3 tiles of you.', instruction_2:'If you miss and the Monster is more than 1 tile away from you, place it 1 tile closer to you.', attack:8, damage:1, miss:0},
        {id: 38, character_id: 4, type:'Daily-Power', title:'Fireball', subtitle:'A globe of orange flame forms in your hand and you hurl it. It explodes in a fiery burst', instruction_1:'Choose a tile 1 tile away from you. Attack each Monster on that tile', instruction_2:'', attack:7, damage:3, miss:1},
        {id: 39, character_id: 4, type:'Daily-Power', title:'Lightning Bolt', subtitle:'Brilliant bolts of blue-white lightning erupt from your outstretched hand.', instruction_1:'Attack one, two or three Monsters. Each Monster can be within 1 tile of you.', instruction_2:'', attack:7, damage:2, miss:1},
        {id: 40, character_id: 4, type:'Daily-Power', title:'Freezing Cloud', subtitle:'You shoot a pellet from your hand that explodes into a cloud of icy mist.', instruction_1:'Place the Freezing Cloud marker on a tile without a marker 1 tile away from you. Place 3 Cloud tokens on the Freezing Cloud marker.', instruction_2:'At the end of your Hero Phase, remove 1 token from the Freezing Cloud marker and deal 1 damage to each Monster on the Freezing cloud tile. Discard the Freezing Cloud marker when there are no Cloud tokens left on it', attack:null, damage:null, miss:null},
        {id: 41, character_id: 5, type:'utility power', title:'Get over here', subtitle:'You leap into a more advantageous position', instruction_1:'Use this power during your Hero Phase instead of moving.', instruction_2:'Choose a Monster within 2 tiles of you. Place your Hero adjacent to that Monster.', attack:null, damage:null, miss:null},
        {id: 42, character_id: 5, type:'utility power', title:'Bodyguard', subtitle:'Use this power when a Monster hits another Hero within 1 tile of you.', instruction_1:'The attack misses instead and you swap positions with the Hero that was attacked', instruction_2:'', attack:null, damage:null, miss:null},
        {id: 43, character_id: 5, type:'utility power', title:'Unstoppable', subtitle:'Your adrenaline carries you through the battle', instruction_1:'Use this power at the start of your Hero Phase', instruction_2:'You regain 2 hit points.', attack:null, damage:null, miss:null},
        {id: 44, character_id: 5, type:'At-Will-Power', title:'Tide of Iron', subtitle:'After each mighty swing you advance as you push your enemy back.', instruction_1:'Attack one adjacent Monster.', instruction_2:"If you hit, place that Monster (if it isn't destroyed) on a tile within 1 tile of you, and you can move to any square on your tile.", attack:8, damage:1, miss:0},
        {id: 45, character_id: 5, type:'At-Will-Power', title:'Cleave', subtitle:'You hit a monster, and then cleave into another', instruction_1:'Attack one adjacent Monster.', instruction_2:'If you hit, choose another Monster on your tile and move adjacent to it. That Monster takes 1 damage.', attack:6, damage:1, miss:0},
        {id: 46, character_id: 5, type:'At-Will-Power', title:'Tapping Strike', subtitle:'Your challenge draws out your opponent.', instruction_1:'Choose one Monster within 1 tile of you. Place that Monster adjacent to your Hero and attack it.', instruction_2:'', attack:8, damage:1, miss:0},
        {id: 47, character_id: 5, type:'Daily-Power', title:"Dragon's Breath", subtitle:'With a roar, you breathe a deadly blast of fire that engulfs your foes.', instruction_1:'Attack each Monster on your tile.', instruction_2:'This attack does not count as an attack action.', attack:4, damage:1, miss:0},
        {id: 48, character_id: 5, type:'Daily-Power', title:'Come and Get it', subtitle:"You call your opponents toward you and deliver an attack they won't forget", instruction_1:'Choose a tile within 1 tile of you. Place each Monster on that tile adjacent to your Hero, and then attack each adjacent Monster.', instruction_2:'', attack:6, damage:1, miss:0},
        {id: 49, character_id: 5, type:'Daily-Power', title:'Precise Strike', subtitle:'You concentrate to make sure you hit your opponent', instruction_1:'Attack one adjacent Monster', instruction_2:'If you miss, do not flip this card over.', attack:11, damage:2, miss:0},
        {id: 50, character_id: 5, type:'Daily-Power', title:'Brute strike', subtitle:"You shatter your enemy's defenses with a powerful blow.", instruction_1:'Attack one adjacent Monster.', instruction_2:'If you miss, do not flip this card over.', attack:5, damage:4, miss:0},
      ]);
    });
};
