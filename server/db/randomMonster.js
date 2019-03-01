const connection = require('./connection')

function getRandomMonster(testDb){
    const db = testDb || connection
    return db('monsters').select()
}

module.exports = getRandomMonster