var closestHero = 1
var heroAc = 15
var diceRoll = 10
var biteAttack = 9
var biteDamage = 3
var clawAttack = 7
var immobilized = true
var isAdjacent = true
 var adjacent = "adj"

var clawDamage = {
    clawDamage: 1,
    adjacent: "adj",
    isParalysed: true
}

var movement = {
    instruction: "move",
    moveValue: 1
}


if (isAdjacent === true  && diceRoll + biteAttack > heroAc){
    return biteDamage
} 
else if (closestHero < 2){
    if(diceRoll + clawAttack > heroAC ){
        return clawdamage
    }
    else{
        return adjacent
    }
}
else{
    return movement
}