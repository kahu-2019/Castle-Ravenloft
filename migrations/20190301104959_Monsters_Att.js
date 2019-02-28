exports.up = function (knex, Promise) {
  return knex.schema.createTable('monsters_att', t => {
    t.integer('id')
    t.string('name')
    t.integer('att')
    t.integer('dmg')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('monsters_att')
};
