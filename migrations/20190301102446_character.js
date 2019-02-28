
exports.up = function(knex, Promise) {
  return knex.schema.createTable('character', t=>{
      t.increments('id').primary()
      t.string('name')
      t.string('sub_title')
      t.text('description')
      t.integer('AC')
      t.integer('HP')
      t.integer('speed')
      t.integer('surge')
      t.text('ability')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('character')
};
