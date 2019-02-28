exports.up = function(knex, Promise) {
  return knex.schema.createTable('character_cards', t =>{
    t.increments('id').primary()
    t.string('type')
    t.string('title')
    t.string('subtitle')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('character_cards')
};
