
exports.up = function(knex) {
  return knex.schema.createTable('patients', function(table){
    table.increments()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('cpf', 11).notNullable()
    
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('patients')
};
