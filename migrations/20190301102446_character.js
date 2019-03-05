
exports.up = function (knex, Promise) {
  return knex.schema.createTable('character', t => {
    t.increments('id').primary()
    t.string('name', 1000)
    t.integer('level')
    t.string('subtitle', 1000)
    t.string('description', 1000)
    t.integer('AC')
    t.integer('HP')
    t.integer('speed')
    t.integer('SurgeValue')
    t.string('ability', 1000)
    t.string('image', 1000)
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('character')
};
