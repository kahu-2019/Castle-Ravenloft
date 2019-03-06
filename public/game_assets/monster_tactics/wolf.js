var isAdjacent = true
var isWithin = false

var heroAc = 15
var diceRoll = 8
 
var bite = {
    attack: 9,
    damage: 2
}

var pounce = {
    attack: 7,
    damage: 1,
    isSlowed: true
}

    var movement = {
        instruction: "move",
        moveValue: 2
    }

// Adjacent to hero, attack with bite
if(isAdjacent === true && diceRoll + bite.attack > heroAc){
    return bite
}
// Within 2 tiles, attack with pounce
else if(isWithin === true && diceRoll + bite.attack > heroAc){
    return pounce

}

// Move two tiles towards closest 
else {
    return movement
}