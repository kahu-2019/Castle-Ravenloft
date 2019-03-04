
exports.up = function (knex, Promise) {
  return knex.schema.createTable('character', t => {
    t.increments('id').primary()
    t.string('name')
    t.integer('level')
    t.string('subtitle')
    t.text('description', 'longtext')
    t.integer('AC')
    t.integer('HP')
    t.integer('speed')
    t.integer('SurgeValue')
    t.text('ability')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('character')
};
