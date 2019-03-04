exports.up = function (knex, Promise) {
  return knex.schema.createTable('character_cards', t => {
    t.increments('id').primary()
    t.integer('character_id')
    t.string('type')
    t.string('title')
    t.string('subtitle')
    t.string('instruction_1', '1000')
    t.string('instruction_2', '1000')
    t.integer('attack')
    t.integer('damage')
    t.integer('miss')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('character_cards')
};
