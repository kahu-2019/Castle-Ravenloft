//Test data
var heroes = [{id: 1, name:'Karl', AC:20},{id: 2,name:'Sam',AC:15},{id: 3,name:'Miju',AC:10}]

var tileAdjacent = false

// Blazing Skeleton attack stats
var ballOfFire = {
    att: 7,
    dmg: 2,
    miss:1,
}

var diceRoll = null

if(tileAdjacent){
    var characters = []
    for(var i = 0; i < heroes.length; i++){
        diceRoll = diceRoll()
        function diceRoll(){
            return Math.floor(Math.random()*20) + 1
        }
        console.log('dice roll:',diceRoll)
        //if hit, burn them 2 dmg
        if(diceRoll + ballOfFire.att > heroes[i].AC){
            console.log('Oh no!', heroes[i].name + ' got hurt with ' + ballOfFire.dmg + ' damage!')
            characters.push({
                id:heroes[i].id,
                damage:ballOfFire.dmg,
            })
        //if miss, burn them 1 dmg
        } else if(diceRoll + ballOfFire.att <= heroes[i].AC){
            console.log('Oh no!', heroes[i].name + ' got hurt with ' + ballOfFire.miss + ' damage!')
            characters.push({
                id:heroes[i].id,
                damage:ballOfFire.miss
            })
        } 
    }
    console.log('character data:',characters)
    return {
        characters
    }
//move closer
}else{
    console.log('coming closer')
    return {
        movement:{
            x:0,
            y:0
        }
    }
}