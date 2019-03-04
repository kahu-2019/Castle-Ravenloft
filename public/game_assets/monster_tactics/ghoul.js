
var heroAc = 15
var diceRoll = 10
var biteAttack = 9
var biteDamage = 3
var clawAttack = 7
var immobilized = true
var isAdjacent = true
var isWithin = true
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

//Adjacent to Hero, Attack
if (isAdjacent === true  && diceRoll + biteAttack > heroAc){
    return biteDamage
} 

//Within 1 tile, Attack
else if (isWithin === true){
    if(diceRoll + clawAttack > heroAC ){
        return clawdamage
    }

//Dice roll failed, move Adj no attack 
    else{
        return adjacent
    }
}

//Move one tile towards closest hero
else{
    return movement
}