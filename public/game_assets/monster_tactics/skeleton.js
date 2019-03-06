// import {diceRoll} from './functions'
const {roll} = require('./functions')
const {isSquareAdjacent} = require('./functions')
const {totalPosition} = require('./functions')
const {detailedPosition} = require('./functions')

//Test data
var playerDetails = {
    adjacentTile:false,
    id:1,
    playerTile:[[1,1,1,1],
    [0,11,0,0],
    [11,0,0,1],
    [0,0,0,1]],
    players:[{id: 1, name:'Karl', AC:20,x:2,y:2},{id: 2,name:'Sam the Gimp',AC:16,x:1,y:3}],
    monster:{id:1,name:'blazing skeleton',x:1,y:1},
    dataSet:[{x:1,y:1,grid:[
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
}

export default function skeleton(playerDetails){
//values i need
var closestPlayer = playerDetails.id
var heroes = playerDetails.players
var tileAdjacent = playerDetails.adjacent
var squareAdjacent = false
var path = playerDetails.path
var monster = playerDetails.monster
var dataSet = playerDetails.dataSet
var monsterTile = undefined

if(playerDetails.players){
    closestPlayer = playerDetails.players.find(player => player.id == playerDetails.id)
}


let monsterTileCoords = detailedPosition(monster)

for(let tile of dataSet){
    if(tile.x === monsterTileCoords.tileX && tile.y === monsterTileCoords.tileY){ monsterTile = tile; break}
}

let offsetX = path[0][0]
let offsetY = path[0][1]

let nextTile = undefined

outerloop:
for(let i in path){
    let squareX = monster.x - offsetX + path[i][0]
    let squareY = monster.y - offsetY + path[i][1]
    for(let tile of dataSet){
        if(squareX > (tile.x-1)*4 && squareX <= (tile.x-1)*4+4 && squareY > (tile.y-1)*4 && squareY <= (tile.y-1)*4+4){
            if(tile != monsterTile){
                nextTile = tile
                break outerloop
            }
        }
    }
}

console.log('nextTIle', nextTile)

console.log(closestPlayer)

//from pos finder function with player.x and player.y, monster.x and monster.y
//DETAILED POSITION
var playerPos = detailedPosition(closestPlayer)

var monPos = detailedPosition(playerDetails.monster)

console.log('playerPos',playerPos)
console.log('monPos',monPos)

//Checks for square adjacent

if(tileAdjacent){
    var squareAdjacent = isSquareAdjacent(playerPos.squareX,playerPos.squareY,monPos.squareX,monPos.squareY)
}

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


var diceRoll = roll()
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
    return undefined
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
}

skeleton(playerDetails)