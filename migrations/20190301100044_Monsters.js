
exports.up = function (knex, Promise) {
  return knex.schema.createTable('monsters', t => {
    t.increments('id').primary()
    t.string('name')
    t.string('type')
    t.integer('AC')
    t.integer('HP')
    t.integer('exp')
    t.string('image')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('monsters');
};
