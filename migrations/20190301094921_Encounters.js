// Encounter event types
// 0 - Event
// 1 - Event, attack
// 2 - Environment
// 3 - trap

exports.up = function (knex, Promise) {
  return knex.schema.createTable('encounters', t => {
    t.increments('id').primary()
    t.integer('evt_type')
    t.string('name')
    t.string('flavour')
<<<<<<< HEAD
    t.string('init_instr')
    t.integer('action')
||||||| merged common ancestors
    t.string('init_instr')
    t.action('integer')
=======
    t.string('description')
>>>>>>> dev
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('encounters')
};
