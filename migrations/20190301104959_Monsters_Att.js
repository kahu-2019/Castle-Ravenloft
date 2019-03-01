exports.up = function (knex, Promise) {
  return knex.schema.createTable('monsters_att', table => {
    t.integer('id')
    t.string('tactics')
    t.integer('att')
    t.integer('dmg')
    t.integer('miss_dmg')
    t.text('special')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('monsters_att')
};
