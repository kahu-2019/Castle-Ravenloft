exports.up = function (knex, Promise) {
  return knex.schema.createTable('adventures', t => {
    t.increments('adv_id').primary()
    t.text('adv_name', 'longtext')
    t.text('flav_text', 'longtext')
    t.text('Goal', 'longtext')
    t.text('spec_components', 'longtext')
    t.text('adv_setup', 'longtext')
    t.text('adv_rules', 'longtext')
    t.text('victory', 'longtext')
    t.text('defeat', 'longtext')
    t.text('start_adv', 'longtext')
    t.text('adv_reveal', 'longtext')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('adventures')
};