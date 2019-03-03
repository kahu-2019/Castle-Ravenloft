var closestHero = 1
var heroAc = 15
var diceRoll = 10
var monsterAttack = 1
var damage = 1
var movement = "move "
var moveValue = 1 
var monsterNum = 4
var adjacent = "adj"

if(closestHero < 2  && diceRoll + monsterAttack > heroAc ) {
    
let attack = damage * monsterNum
console.log(attack + " " + adjacent) 
 return attack + adjacent
} 

else {
    console.log(movement + moveValue)
  return movement + moveValue
}
