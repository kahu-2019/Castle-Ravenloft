
exports.up = function (knex, Promise) {
  return knex.schema.createTable('monsters', t => {
    t.increments('id').primary()
    t.string('name', 1000)
    t.string('type', 1000)
    t.integer('AC')
    t.integer('HP')
    t.integer('att1')
    t.integer('att2')
    t.integer('exp')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('monsters');
};
