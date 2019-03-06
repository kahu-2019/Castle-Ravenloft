//Test data
var hero = {id:1,name:'Imerril',AC:15}
var heroes = [{id: 1, name:'Karl', AC:20},{id: 2,name:'Sam',AC:15},{id: 3,name:'Miju',AC:10}]

var diceRoll = diceRoll()
function diceRoll(){
    return Math.floor(Math.random()*20) + 1
}

var monsterDead = true
var tileAdjacent = false
var squareAdjacent = false


// Wraith stats
var lifeDrainingClaw = {
    att: 6,
    dmg: 3,
    miss:1,
}



console.log('dice roll:',diceRoll)

if(monsterDead){
    console.log('everyone hurts. Receive 1 damage')
    var characters = []
    for(var i = 0; i < heroes.length; i++){
        characters.push({
            id:heroes[i].id,
            damage:1
        })
    }
    console.log('character data:',characters)

    return {
        characters
    }
}

//Right next to hero, attack
if(squareAdjacent && diceRoll + lifeDrainingClaw.att > hero.AC){
    console.log("he's right next to you! You've been hit! Receive ",lifeDrainingClaw.dmg + ' damage!')
    return {
        id:hero.id,
        damage: lifeDrainingClaw.dmg
    }
    
} else if(squareAdjacent && diceRoll + lifeDrainingClaw.att <= hero.AC){
    console.log("he's right next to you! He missed, but still hits you with ",lifeDrainingClaw.miss + ' damage!')
    return {
        id:hero.id,
        damage:lifeDrainingClaw.miss
    }

//Within 1 tile of hero, attack
} else if(tileAdjacent){
    if(diceRoll + lifeDrainingClaw.att > hero.AC){
        console.log("he ain't close, but he is now! AND hits you with ", lifeDrainingClaw.dmg + ' damage!')
        return {
            movement:{
                x:0,
                y:0
            },
            damage:lifeDrainingClaw.dmg
        }

    } else if(diceRoll + lifeDrainingClaw.att <= hero.AC){
        console.log("he ain't close, but he is now! He missed clawing you... But still hits with a damage of ", lifeDrainingClaw.miss + '!')
        return {
            movement:{
                x:0,
                y:0
            },
            damage:lifeDrainingClaw.miss
        }
    }
//Move if too far
} else {
    console.log("he be creepin' on ya")
    return {
        movement:{
            x:0,
            y:0
        }
    }
}

