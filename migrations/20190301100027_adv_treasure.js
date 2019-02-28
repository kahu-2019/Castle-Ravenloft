
exports.up = function(knex, Promise) {
  return knex.schema.createTable('adv_treasure', table => {
      table.increments('id').primary()
      table.integer('adv_id')
      table.string('name')
      table.integer('use_item')
      table.text('desc')
      table.integer('discard')
      
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('adv_treasure')
};
