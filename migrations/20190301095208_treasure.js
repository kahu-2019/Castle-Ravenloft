
exports.up = function (knex, Promise) {
  return knex.schema.createTable('treasure', (table => {
    table.increments('id').primary()
    table.integer('type')
    table.string('name')
    table.boolean('play_imm')
    table.text('action', 1000)
    table.integer('discard')
    table.integer('att')
    table.integer('dmg')
  }))
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('treasure')
};
