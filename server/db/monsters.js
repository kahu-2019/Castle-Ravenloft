const connection = require('./connection')

function getAllMonsters(db = connection){
    return db('monsters')
}

function getMonsterById(id, db = connection){
    return db('monsters').where('id', id)
}

function getAttacksByMonster(id, db = connection){
    return db('monsters_att').where('monster_id', id)
}
module.exports = {
    getAllMonsters,
    getMonsterById,
    getAttacksByMonster
}