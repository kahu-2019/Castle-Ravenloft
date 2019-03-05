const connection = require('./connection')

function getAllMonsters(db = connection){
    return db('monsters').then(async monsters => {
        return await Promise.all(monsters.map(monster => {
            return db('monsters_att').where('monster_id', monster.id).then(attacks => {
                monster.attacks = attacks
                return monster
            })
        }))
    })
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