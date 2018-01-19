module.exports.seed = knex => {
  return knex(markers).insert({
    lat: 0,
    lng: 0
  })
}
