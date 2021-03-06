exports.up = function (knex, Promise) {
  return knex.schema.createTable("monsters_att", t => {
    t.integer("id");
    t.integer("monster_id");
    t.string("tactics", 1000);
    t.string("attack_name", 1000);
    t.integer("att");
    t.integer("dmg");
    t.integer("miss_dmg");
    t.string("special", 1000);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("monsters_att");
};
