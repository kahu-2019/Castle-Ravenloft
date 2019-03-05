// var closestHero = 1
var heroAc = 15
var diceRoll = 10
var attack = 8
var damage = 2
var miss = 1
var slowed = true
var immobilized = true
var isAdjacent = true
var adjacent = "adj"
var isWithin1 = true

var missDamage = {
    miss: 1,

}

var damage = {
    damage: 2,
    instruction: "move",
    target: "all"
}

var movement = {
    instruction: "move",
    moveValue: 1
}


if (isWithin === true ) {
    if (diceRoll + attack > heroAC) {
        return damage
    }
    else {
        return adjacent
    }
}