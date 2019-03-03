const connection = require('./connection')

function getAllTreasure(db = connection) {
    return db('treasure')
}
function getRandomTreasure(db = connection) {
    
    // Gets a random number between 1 and 45 (inclusive), as there are 45 encounter cards
    let num = Math.floor(Math.random()*46)
    return db('treasure').where('id', num).first()
}

module.exports = {
  getAllTreasure,
  getRandomTreasure
}