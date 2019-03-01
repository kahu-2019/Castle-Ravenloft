const connection = require('./connection')

function getAllCharacters(db = connection){
    return db('character')
}

function getCharacter(char, db = connection){
    return db('character').where('id', char)
}

function getCardsByCharacter(char, db = connection){
    return db('character_cards').where('character_id', char)
}

module.exports = {
    getAllCharacters,
    getCharacter,
    getCardsByCharacter
}