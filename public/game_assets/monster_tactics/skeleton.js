//Test data
var hero = {id:1,name:'Imerril',AC:15}

var diceRoll = 1

var tileAdjacent = false
var squareAdjacent = false

// Skeleton attack stats
var scimitar = {
    att: 7,
    dmg: 1
}

var slice = {
    att: 9,
    dmg: 2
}




//Right next to, scimitar att
if(squareAdjacent && diceRoll + scimitar.att > hero.AC){
    console.log('he boutta scimitar you cause you too close. BAM! ', scimitar.dmg + ' damage!')
    return {
        id:hero.id,
        damage:scimitar.dmg
    }
//Right next to and miss, don't move
} else if(squareAdjacent && diceRoll + scimitar.att <= hero.AC){
    console.log('luckily he missed the scimi hit')
    return {
        movement:{
            x:0,
            y:0
        }
    }
//Close to, slice att AND move
}else if(tileAdjacent && diceRoll + slice.att > hero.AC){
    console.log('he just charged... Bam! Charge sliced yo ass for ', slice.dmg + ' damage!')
    return {
        movement:{
            x:0,
            y:0
        },
        id:hero.id,
        damage:slice.dmg
    }
//Close to and miss, move next to
}else if(tileAdjacent && diceRoll + slice.att <= hero.AC){
    console.log('he missed but now he close...')
    return {
        movement:{
            x:0,
            y:0
        }
    }
//Move closer
} else{
    console.log('skelly boi comin for ya')
    return{
        movement:{
            x:0,
            y:0
        }
    }
}