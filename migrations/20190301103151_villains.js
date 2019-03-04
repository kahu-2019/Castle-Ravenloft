
exports.up = function (knex, Promise) {
  return knex.schema.createTable('villains', table => {
    table.increments('id')
    table.string('name', 1000)
    table.string('race', 1000)
    table.string('description')
    table.integer('ac')
    table.integer('hp')
    table.integer('level')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('villains')
};
