//Test data
var heroAc = 15
var diceRoll = 1

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
console.log('dice roll:', diceRoll)
//Right next to hero, bite
if (squareAdjacent && diceRoll + bite.att > heroAc){
    console.log('next to', bite.dmg)
    return bite.dmg

} else if(squareAdjacent && diceRoll + bite.att < heroAc){
    console.log('next to, miss', bite.miss)
    return bite.miss

} else if(tileAdjacent && diceRoll + web.att > heroAc){
    console.log('he webbed, you receive', web.dmg + ' and you are slowed:' + web.isSlowed)
    return {
        damage:web.dmg,
        slowed:web.isSlowed,
        move:{
            instruction:movement.instruction,
            moveValue:1
        }
    }
}else if(tileAdjacent && diceRoll + web.att < heroAc){
    console.log('he missed, but he is close now')
    return movement
} else {
    console.log('he be closer')
    return movement
}