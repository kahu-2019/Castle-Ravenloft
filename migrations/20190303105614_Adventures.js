exports.up = function (knex, Promise) {
  return knex.schema.createTable('adventures', t => {
    t.increments('adv_id').primary()
    t.varchar(1000)('adv_name')
    t.varchar(1000)('flav_varchar(1000)')
    t.varchar(1000)('Goal')
    t.varchar(1000)('spec_components')
    t.varchar(1000)('adv_setup')
    t.varchar(1000)('adv_rules')
    t.varchar(1000)('victory')
    t.varchar(1000)('defeat')
    t.varchar(1000)('start_adv')
    t.varchar(1000)('adv_reveal')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('adventures')
};