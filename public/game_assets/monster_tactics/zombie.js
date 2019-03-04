var closestHero = 1
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



if(closestHero < 2  && diceRoll + monsterAttack > heroAc ) {

console.log(attack + " " + adjacent) 
 return zombAtt
} 

else {
    console.log(movement + moveValue)
  return movement
}
