var isWithin1 = true
var heroAc = 15
var diceRoll = 10
var monsterAttack = 1
var damage = 1
var monsterNum = 4
var adjacent = "adj"
    
var attack = damage * monsterNum

var zombAtt = {
    attack: attack,
    adjacent: adjacent
}
var movement = {
    instruction: "move",
    moveValue: 1
}


// Within one tile of hero, attacks rotting fist
if(isWIthin ===true  && diceRoll + monsterAttack > heroAc ) {

console.log(attack + " " + adjacent) 
 return zombAtt
} 


// Not within one tile, moves 1 tile to closest hero
else {
    console.log(movement + moveValue)
  return movement
}
