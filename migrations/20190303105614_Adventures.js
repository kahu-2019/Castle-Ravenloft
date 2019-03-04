exports.up = function (knex, Promise) {
  return knex.schema.createTable('adventures', t => {
    t.increments('adv_id').primary()
    t.text('adv_name', '1000')
    t.text('flav_text', '1000')
    t.text('Goal', '1000')
    t.text('spec_components', '1000')
    t.text('adv_setup', '1000')
    t.text('adv_rules', '1000')
    t.text('victory', '1000')
    t.text('defeat', '1000')
    t.text('start_adv', '1000')
    t.text('adv_reveal', '1000')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('adventures')
};