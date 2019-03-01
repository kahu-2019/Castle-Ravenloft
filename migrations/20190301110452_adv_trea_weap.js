
exports.up = function (knex, Promise) {
  return knex.schema.createTable('adv_trea_weap', table => {
    table.increments('id').primary()
    table.integer('ad_trea_id')
    table.integer('att')
    table.integer('dmg')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('adv_trea_weap')
};
