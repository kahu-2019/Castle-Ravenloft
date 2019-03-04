var closestHero = 1
var heroAc = 25
var diceRoll = 10
var monsterAttack = 7
var damage = 1
// var movement = "move"
// var moveValue = 1 

var movement = {
    instruction: "move",
    moveValue: 1
}

if(closestHero < 2  && diceRoll + monsterAttack > heroAc ) {
    console.log('damage')
 return damage
} 
else {
    console.log("move")
  return movement
}
