module.exports.up = knex => {
  return knex.schema.createTable('markers', table => {
    table.increments('id')
    table.string(lat)
    table.string(lng)
    table.timestamps(false, true)
  })
}

module.exports.down = knex => {
  knex.schema.dropTable('markers')
}
