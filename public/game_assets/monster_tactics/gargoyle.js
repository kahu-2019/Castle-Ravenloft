//Test data
var heroes = [{id: 1, name:'Karl', AC:20},{id: 2,name:'Sam',AC:15},{id: 3,name:'Miju',AC:10}]

var tileAdjacent = true
var squareAdjacent = false

// Gargoyle attack stats
var whirlwindOfClaws = {
    att: 8,
    dmg: 2,
    miss:1,
}

// if hit then slow else nahh

var movement = {
    instruction: "move",
    moveValue: 1
}

var diceRoll = null

//attack and move
if(tileAdjacent){
    var characters = []
    for(var i = 0; i < heroes.length; i++){
        diceRoll = diceRoll()
        function diceRoll(){
            return Math.floor(Math.random()*20) + 1
        }
        console.log('dice roll:',diceRoll)
        
        if(diceRoll + whirlwindOfClaws.att > heroes[i].AC){
            console.log('Oh no!', heroes[i].name + ' got hurt with ' + whirlwindOfClaws.dmg + ' damage!' + ' and slowed!')
            characters.push({
                id:heroes[i].id,
                damage:whirlwindOfClaws.dmg,
                effect:'slowed'
            })
        } else if(diceRoll + whirlwindOfClaws.att <= heroes[i].AC){
            console.log('Oh no!', heroes[i].name + ' got hurt with ' + whirlwindOfClaws.miss + ' damage!')
            characters.push({
                id:heroes[i].id,
                damage:whirlwindOfClaws.miss
            })
        } 
    }
    console.log('character data:',characters)
    //still need to figure out movement
    return {
        movement:{
            x:0,
            y:0
        },
        characters
    }
}