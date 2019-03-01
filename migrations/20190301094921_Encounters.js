// Encounter event types
// 0 - Event
// 1 - Event, attack
// 2 - Environment
// 3 - trap

exports.up = function (knex, Promise) {
  return knex.schema.createTable('encounters', table => {
    t.increments('id').primary()
    t.integer('evt_type') 
    t.string('name')
    t.string('flavour')
    t.string('description')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('encounters')
};
