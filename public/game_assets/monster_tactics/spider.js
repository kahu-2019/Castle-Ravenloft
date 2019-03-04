//Test data
var heroAc = 15
var diceRoll = 10

var tileAdjacent = false
var squareAdjacent = false

// Spider attack stats
var bite = {
    att: 6,
    dmg: 2,
    miss:1,
}

var web = {
    att: 11,
    dmg: 1,
    isSlowed: true
}

var movement = {
    instruction: "move",
    moveValue: 2
}

//Right next to hero, bite
if (squareAdjacent && diceRoll + bite.att > heroAc){
    return bite.dmg

} else if(squareAdjacent && diceRoll + bite.att < heroAc){
    return bite.miss

} else if(tileAdjacent && diceRoll + web.att > heroAc){
    return {
        damage:web.dmg,
        slowed:web.isSlowed,
        move:{
            instruction:movement.instruction,
            moveValue:1
        }
    }
} else {
    return movement
}