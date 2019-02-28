exports.up = function (knex, Promise) {
  return knex.schema.createTable('encounters', t => {
    t.increments('id').primary()
    t.integer('evt_type')
    t.string('name')
    t.string('flavour')
    t.string('init_instr')
    t.integer('action')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('encounters')
};
