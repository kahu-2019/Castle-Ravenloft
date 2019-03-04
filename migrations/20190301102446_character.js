
exports.up = function (knex, Promise) {
  return knex.schema.createTable('character', t => {
    t.increments('id').primary()
    t.string('name')
    t.integer('level')
    t.string('subtitle')
    t.string('description', '1000')
    t.integer('AC')
    t.integer('HP')
    t.integer('speed')
    t.integer('SurgeValue')
    t.string('ability')
    t.string('image')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('character')
};
