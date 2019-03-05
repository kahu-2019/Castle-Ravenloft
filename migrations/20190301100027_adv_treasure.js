
exports.up = function (knex, Promise) {
  return knex.schema.createTable('adv_treasure', table => {
    table.increments('id').primary()
    table.string('name', 1000)
    table.integer('use_item')
    table.string('desc', 1000)
    table.integer('discard')

  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('adv_treasure')
};
