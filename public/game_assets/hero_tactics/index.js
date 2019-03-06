//test data
var monsterDetails = {
    player:{id:1,name:'rat puncher'},
    cardId:15,
    monsterId: 7,
    owner:{monsters:[{id:7,HP:1,AC:16},{id:5,HP:2,AC:16}]},
    path:[[],[]]
}

function roll(){
    return Math.floor(Math.random()*20) + 1
}

function findCard(monsterDetails){
    switch(monsterDetails.cardId){
        case 27:
        return carefulAttack(monsterDetails)
        break
        case 15:
        return backstab(monsterDetails)
        break
        case 6:
        return healingStrike(monsterDetails)
    }
}


function carefulAttack(monsterDetails){
    if(monsterDetails.path.length == 2){
        var squareAdjacent = true
    }

    var monsterIndex = monsterDetails.owner.monsters.findIndex(monster => monster.id == monsterDetails.monsterId)

    if(squareAdjacent){
        monsterDetails.owner.monsters[monsterIndex].HP = monsterDetails.owner.monsters[monsterIndex].HP -1
        if(monsterDetails.owner.monsters[monsterIndex].HP == 0){
            monsterDetails.owner.monsters = monsterDetails.owner.monsters.filter(monster => monster.id != monsterDetails.monsterId)
            return {
                owner:monsterDetails.owner
            }
            }else{
            return {
                    owner:monsterDetails.owner
                }
            }
    }
}

function backstab(monsterDetails){
    //Dont be near hero!!
    var diceRoll = roll()
    var backstab = {
        att:7,
        dmg:1
    }

    if(monsterDetails.path.length == 2){
        var squareAdjacent = true
    }

    var monsterIndex = monsterDetails.owner.monsters.findIndex(monster => monster.id == monsterDetails.monsterId)

    var monster = monsterDetails.owner.monsters[monsterIndex]

    if(squareAdjacent){
        if(diceRoll + backstab.att > monster.AC){
            monsterDetails.owner.monsters[monsterIndex].HP = monster.HP - backstab.dmg
            if(monsterDetails.owner.monsters[monsterIndex].HP == 0){
                monsterDetails.owner.monsters = monsterDetails.owner.monsters.filter(monster => monster.id != monsterDetails.monsterId)
                return {
                    owner:monsterDetails.owner
                }
                }else{
                return {
                        owner:monsterDetails.owner
                    }
                }
        }else{
            return {
                owner:monsterDetails.owner
            }
        }
    }
}

function healingStrike(monsterDetails){
    //Dont be within 1 tile of a hero!!
    var diceRoll = roll()
    var healingStrike = {
        att:8,
        dmg:1
    }

    if(monsterDetails.path.length == 2){
        var squareAdjacent = true
    }

    var monsterIndex = monsterDetails.owner.monsters.findIndex(monster => monster.id == monsterDetails.monsterId)

    var monster = monsterDetails.owner.monsters[monsterIndex]

    if(squareAdjacent){
        if(diceRoll + healingStrike.att > monster.AC){
            monsterDetails.owner.monsters[monsterIndex].HP = monster.HP - healingStrike.dmg
            if(monsterDetails.owner.monsters[monsterIndex].HP == 0){
                monsterDetails.owner.monsters = monsterDetails.owner.monsters.filter(monster => monster.id != monsterDetails.monsterId)
                return {
                    owner:monsterDetails.owner
                }
                }else{
                return {
                        owner:monsterDetails.owner
                    }
                }
        }else{
            return {
                owner:monsterDetails.owner
            }
        }
    }
}

