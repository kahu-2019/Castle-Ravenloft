exports.up = function (knex, Promise) {
  return knex.schema.createTable('encounters', table => {
    t.increments('id').primary()
    t.integer('evt_type')
    t.string('name')
    t.string('flavour')
    t.string('init_instr')
    t.action('integer')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('encounters')
};
