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

export function blazingSkeleton(playerDetails){
//values i need
var closestPlayer = playerDetails.players.find(player => player.id == playerDetails.id)
var heroes = playerDetails.players
var tileAdjacent = playerDetails.adjacentTile
var squareAdjacent = false

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


// Blazing Skeleton attack stats
var ballOfFire = {
    att: 7,
    dmg: 2,
    miss:1,
}

var diceRoll = null

if(tileAdjacent || squareAdjacent){
    var characters = []
    for(var i = 0; i < heroes.length; i++){
        diceRoll = roll()
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
    //convert to detailedPosition
    var monX = monPos.tileX
    var monY = monPos.tileY
    var playX = playerPos.tileX
    var playY = playerPos.tileY

    var destination = {x:monX - playX,y:monY - playY}

    var tileExists = playerDetails.dataSet.find(tile => {
        tile.x == destination.x && tile.y == destination.y
        return true
    })
    
    console.log('tile Exists:',tileExists)

    if(tileExists != null || tileExists != undefined){
        if(tileExists.grid[monPos.squareY][monPos.squareX] == 0 || tileExists.grid[monPos.squareY][monPos.squareX] == 2){
            monPos.tileX = tileExists.x
            monPos.tileY = tileExists.y
        }else{
            //look for first free space and set monPos to the square as well as the tile
            let square = {}

            
            outerLoop: for(let row in tileExists.grid){
                for(let col in tileExists.grid[row]){
                    if(tileExists.grid[row][col] == 0 || tileExists.grid[row][col] == 2){
                        square.x = Number(col)
                        square.y = Number(row)
                        break outerLoop
                    }
                }
            }
//convert to total position
            var movement = totalPosition(tileExists.x,tileExists.y,square.x,square.y)
        }

    }


    
    console.log('coming closer', movement)

    return movement
}
}