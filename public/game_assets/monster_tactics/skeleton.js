//Test data
var playerDetails = {
    adjacentTile:false,
    id:1,
    playerTile:[[1,1,1,1],
                [0,11,0,0],
                [11,0,0,1],
                [0,0,0,1]],
    players:[{id: 1, name:'Karl', AC:20,x:2,y:2},{id: 2,name:'Sam the Gimp',AC:16,x:1,y:3}]
}

//from pos finder function with player.x and player.y, monster.x and monster.y
//TOTAL POSITION

var playerPos = {
    tileX: 1,
    tileY:1,
    squareX:3,
    squareY:3
}

var monPos = {
    tileX:1,
    tileY:1,
    squareX:3,
    squareY:4
}

console.log('first monpos', monPos)

var dataSet = [{x:1,y:1,grid:[
    [1,1,1,1],
    [0,0,0,0],
    [0,2,1,1],
    [0,0,0,0]
    ]},
    {x:1,y:2,grid:[
            [0,0,0,0],
            [0,0,0,0],
            [0,2,0,0],
            [0,0,0,0]
        ]},
        {x:2,y:2,grid:[
            [0,0,0,0],
            [0,0,0,0],
            [0,2,0,0],
            [0,0,0,0]
        ]}]



//values i need
var closestPlayer = playerDetails.players.find(player => player.id == playerDetails.id)
var heroes = playerDetails.players
var tileAdjacent = playerDetails.adjacentTile
var squareAdjacent = false

//Checks for square adjacent
if(playerPos.squareX -1 == monPos.squareX && playerPos.squareY == monPos.squareY){
    squareAdjacent = true
} else if(playerPos.squareX +1 == monPos.squareX && playerPos.squareY == monPos.squareY){
    squareAdjacent = true
} else if(playerPos.squareX == monPos.squareX && playerPos.squareY -1 == monPos.squareY){
    squareAdjacent = true
} else if(playerPos.squareX == monPos.squareX && playerPos.squareY + 1 == monPos.squareY){
    squareAdjacent = true
} else {squareAdjacent = false}

console.log(closestPlayer)
console.log(tileAdjacent)

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
if(squareAdjacent && diceRoll + scimitar.att > closestPlayer.AC){
    console.log('he boutta scimitar you cause you too close. BAM! ', scimitar.dmg + ' damage!')
    return {
        id:closestPlayer.id,
        damage:scimitar.dmg
    }
//Right next to and miss, don't move
} else if(squareAdjacent && diceRoll + scimitar.att <= closestPlayer.AC){
    console.log('luckily he missed the scimi hit')
    return {
        movement:{
            x:0,
            y:0
        }
    }
//Close to, slice att AND move
}else if(tileAdjacent && diceRoll + slice.att > closestPlayer.AC){
    console.log('he just charged... Bam! Charge sliced yo ass for ', slice.dmg + ' damage!')
    return {
        movement:{
            x:0,
            y:0
        },
        id:closestPlayer.id,
        damage:slice.dmg
    }
//Close to and miss, move next to
}else if(tileAdjacent && diceRoll + slice.att <= closestPlayer.AC){
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