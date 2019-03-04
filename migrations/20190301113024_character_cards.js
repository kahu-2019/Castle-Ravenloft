exports.up = function (knex, Promise) {
  return knex.schema.createTable('character_cards', t => {
    t.increments('id').primary()
    t.integer('character_id')
    t.string('type')
    t.string('title')
    t.string('subtitle')
    t.text('instruction_1', 'longtext')
    t.text('instruction_2', 'longtext')
    t.integer('attack')
    t.integer('damage')
    t.integer('miss')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('character_cards')
};
