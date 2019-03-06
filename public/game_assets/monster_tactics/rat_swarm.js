var closestHero = 1
var heroAc = 25
var diceRoll = 10
var biteAttack = 7
var heroCoords = d
var monstCoords = d
var isAdjacent = true
var isWithin = true
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

var heroInfo = {
    adjacentTile = {

    },
    closestPlayer: 5,
    playerTile : [[1,1,1,1,
                    0,11,0,0,
                    11,0,0,0,
                    0,0,0,1]]
}   

if(playerTile[y-1][x] === 0  || 2){
    console.log("1")
    movement.push({
        x:x,
        y:y-1
    })
        
        return movement
    }
    else if(playerTile[y+1][x] === 0 || 2){
        console.log("2")
        movement.push({
        x:x,
        y:y+1   
        })

        return movement 
    }

else if(playerTile[y][x-1] === 0 || 2){
    console.log("3")
    movement.push({
        x:x-1,
        y:y  
        })

        return movement 
}
else if(playerTile[y][x+1] === 0 || 2){
    console.log("4")
    movement.push({
        x:x+1,
        y:y  
        })
        c
        return movement 
}



if(isAdjacent === true ){
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
