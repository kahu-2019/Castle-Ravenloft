//Test data
var hero = {id:1,name:'Imerril',AC:15}

var diceRoll = 1

var tileAdjacent = false
var squareAdjacent = false

// Spider attack stats
var bite = {
    att: 6,
    dmg: 2,
    miss:1,
}

var web = {
    att: 11,
    dmg: 1,
    isSlowed: true
}

var movement = {
    instruction: "move",
    moveValue: 2
}
console.log('dice roll:', diceRoll)

//Right next to hero, bite
if (squareAdjacent && diceRoll + bite.att > hero.AC){
    console.log('next to', bite.dmg)
    return {
        id:hero.id,
        damage:bite.dmg
    }

} else if(squareAdjacent && diceRoll + bite.att <= hero.AC){
    console.log('next to, miss', bite.miss)
    return {
        id:hero.id,
        damage:bite.miss
    }

//Close to hero, web
} else if(tileAdjacent && diceRoll + web.att > hero.AC){
    console.log('he webbed, you receive', web.dmg + ' and you are slowed:' + web.isSlowed)
    return {
        id:hero.id,
        damage:web.dmg,
        effect:'slowed',
        movement:{
            x:0,
            y:0
        }
    }
}else if(tileAdjacent && diceRoll + web.att <= hero.AC){
    console.log('he missed, but he is close now')
    return {
        movement:{
            x:0,
            y:0
        }
    }
} else {
    console.log('he be closer')
    return {
        movement:{
            x:0,
            y:0
        }
    }
}