exports.up = function (knex, Promise) {
  return knex.schema.createTable('monsters_att', t => {
    t.integer('id')
    t.integer('monster_id')
    t.string('tactics')
    t.varchar(1000)('attack_name')
    t.integer('att')
    t.integer('dmg')
    t.integer('miss_dmg')
    t.varchar(1000)('special')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("monsters_att");
};
