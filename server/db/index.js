const connection = require('./connection')

function getAllEncounters(db = connection) {
  return db('encounters')
}
module.exports = {
  getAllEncounters
}