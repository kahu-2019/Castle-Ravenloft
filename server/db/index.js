const connection = require('./connection')

function getAllEncounters(db = connection) {
  return db('encounters')
}
function getRandomEncounter(db = connection) {
    
    // Gets a random number between 1 and 60 (inclusive), as there are 60 encounter cards
    let num = Math.floor(Math.random()*61)
    return db('encounters').where('id', num).first()
}

module.exports = {
  getAllEncounters,
  getRandomEncounter
}