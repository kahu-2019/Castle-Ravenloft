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

export default function spider(playerDetails){
//values i need
var closestPlayer = playerDetails.id
var heroes = playerDetails.players
var tileAdjacent = playerDetails.adjacent
var squareAdjacent = false
var path = playerDetails.path
var monster = playerDetails.monster
var dataSet = playerDetails.dataSet

if(playerDetails.players){
    closestPlayer = playerDetails.players.find(player => player.id == playerDetails.id)
}



    // console.log(closestPlayer)

    //from pos finder function with player.x and player.y, monster.x and monster.y
    //DETAILED POSITION
    var playerPos = detailedPosition(closestPlayer)

    var monPos = detailedPosition(playerDetails.monster)

    // console.log('playerPos',playerPos)
    // console.log('monPos',monPos)

    //same tile
    // if(playerPos.tileX === monPos.tileX && playerPos.tileY === monPos.tileY){}

    //Checks for square adjacent
        if(tileAdjacent){
            var squareAdjacent = isSquareAdjacent(path)
        }
    
    // console.log(closestPlayer)
    // console.log(tileAdjacent)


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


var diceRoll = roll()
//Right next to hero, bite
if (squareAdjacent && diceRoll + bite.att > closestPlayer.AC){
    console.log('next to', bite.dmg)
    return {
        id:closestPlayer.id,
        damage:bite.dmg
    }

} else if(squareAdjacent && diceRoll + bite.att <= closestPlayer.AC){
    console.log('next to, miss', bite.miss)
    return {
        id:closestPlayer.id,
        damage:bite.miss
    }

//Close to hero, web. doesn't move
} else if(tileAdjacent && diceRoll + web.att > closestPlayer.AC){
    console.log('he webbed, you receive', web.dmg + ' and you are slowed:' + web.isSlowed)
    return {
        id:closestPlayer.id,
        damage:web.dmg,
        effect:'slowed',
    }
}else if(tileAdjacent && diceRoll + web.att <= closestPlayer.AC){
    console.log('he missed, but he is close now')
    return {}
} else {
        console.log('he be closer')
        //convert to detailedPosition
        let monsterTileCoords = detailedPosition(monster)
        let monsterTile = undefined

        for(let tile of dataSet){
            if(tile.x === monsterTileCoords.tileX && tile.y === monsterTileCoords.tileY){ monsterTile = tile; break}
        }

        let offsetX = path[0][0]
        let offsetY = path[0][1]

        // let nextTile = undefined
        let nextSquare = undefined

        let next = 0
        outerloop:
        for(let i in path){
            let squareX = monster.x - offsetX + path[i][0]
            let squareY = monster.y - offsetY + path[i][1]
            for(let tile of dataSet){
                if(squareX > (tile.x-1)*4 && squareX <= (tile.x-1)*4+4 && squareY > (tile.y-1)*4 && squareY <= (tile.y-1)*4+4){
                    if(tile != monsterTile){
                        // nextTile = tile
                        nextSquare = {
                            x: squareX,
                            y: squareY
                        }
                        monsterTile = tile
                        next++
                        if(next === 2){
                            break outerloop
                        }
                    }
                }
            }
        }
        
        return {position: nextSquare}
}
}