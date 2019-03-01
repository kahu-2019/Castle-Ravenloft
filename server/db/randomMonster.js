const connection = require('./connection')

function getRandomMonster(db = connection) {
    
    // Gets a random number between 1 and 10 (inclusive), as there are 10 monster cards
    let num = Math.floor(Math.random()*11)
    return db('monsters').where('id', num).first()
}

module.exports = {
    getRandomMonster}