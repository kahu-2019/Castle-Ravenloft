<<<<<<< HEAD
exports.up = function (knex, Promise) {
  return knex.schema.createTable('monsters_att', t => {
    t.integer('id')
    t.integer('monster_id')
    t.string('tactics')
    t.text('attack_name', 'longtext')
    t.integer('att')
    t.integer('dmg')
    t.integer('miss_dmg')
    t.text('special', 'longtext')
  })
||||||| merged common ancestors
exports.up = function (knex, Promise) {
  return knex.schema.createTable('monsters_att', t => {
    t.integer('id')
    t.integer('monster_id')
    t.string('tactics')
    t.text('attack_name')
    t.integer('att')
    t.integer('dmg')
    t.integer('miss_dmg')
    t.text('special')
  })
=======
exports.up = function(knex, Promise) {
  return knex.schema.createTable("monsters_att", t => {
    t.integer("id");
    t.integer("monster_id");
    t.string("tactics");
    t.text("attack_name");
    t.integer("att");
    t.integer("dmg");
    t.integer("miss_dmg");
    t.text("special");
  });
>>>>>>> dev
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("monsters_att");
};
