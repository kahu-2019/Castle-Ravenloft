exports.up = function (knex, Promise) {
  return knex.schema.createTable('adventures', t => {
    t.increments('adv_id').primary()
    t.text('adv_name')
    t.text('flav_text')
    t.text('Goal')
    t.text('spec_components')
    t.text('adv_setup')
    t.text('adv_rules')
    t.text('victory')
    t.text('defeat')
    t.text('start_adv')
    t.text('adv_reveal')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('adventures')
};