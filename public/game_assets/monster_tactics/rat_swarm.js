var closestHero = 1
var heroAc = 25
var diceRoll = 10
var biteAttack = 7
var heroCoords = d
var monstCoords = d
var tileAdjacent = true
var tileWithin = true
var heroesArr = [{name:"karl the wizard", AC:15, id:1},{name:"sam the gimp", AC:16, id: 3}]

var damage = {
    damage:1,
    instruction:"move",
    target: "all"
}


var movement = {
    x:0,
    y:0
}

if(tileAdjacent === true ){
    var characters =[]
    for(i=0; i < heroesArr.length; i++){
        diceRoll = diceRoll()
        function diceRoll(){
            return Math.floor(Math.random()*20)
        }
        if(diceRoll + biteAttack > heroesArr[i].AC ){
            characters.push({
                damage: damage.damage,
                id: heroesArr[i].id
            })
        }
        else{
            return movement
        }
    }

}
