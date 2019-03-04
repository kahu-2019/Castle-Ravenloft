exports.up = function (knex, Promise) {
  return knex.schema.createTable('adventures', t => {
    t.increments('adv_id').primary()
    t.string('adv_name', '1000')
    t.string('flav_text', '1000')
    t.string('Goal', '1000')
    t.string('spec_components', '1000')
    t.string('adv_setup', '1000')
    t.string('adv_rules', '1000')
    t.string('victory', '1000')
    t.string('defeat', '1000')
    t.string('start_adv', '1000')
    t.string('adv_reveal', '1000')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('adventures')
};