// import {diceRoll} from './functions'
const {roll} = require('./functions')
const {isSquareAdjacent} = require('./functions')
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

export default function wraith(playerDetails){
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




    //from pos finder function with player.x and player.y, monster.x and monster.y
    //DETAILED POSITION
    var playerPos = detailedPosition(closestPlayer)

    var monPos = detailedPosition(playerDetails.monster)

    //same tile
    // if(playerPos.tileX === monPos.tileX && playerPos.tileY === monPos.tileY){}

    //Checks for square adjacent
        if(tileAdjacent){
            var squareAdjacent = isSquareAdjacent(path)
        }
    


// Wraith att stats
var lifeDrainingClaw = {
    att: 6,
    dmg: 3,
    miss:1,
}



//STRETCH
// if(monsterDead){
//     console.log('everyone hurts. Receive 1 damage')
//     var characters = []
//     for(var i = 0; i < heroes.length; i++){
//         characters.push({
//             id:heroes[i].id,
//             damage:1
//         })
//     }
//     console.log('character data:',characters)

//     return {
//         characters
//     }
// }

var diceRoll = roll()
//Right next to hero, attack
if(squareAdjacent && diceRoll + lifeDrainingClaw.att > closestPlayer.AC){
    console.log("he's right next to you! You've been hit! Receive ",lifeDrainingClaw.dmg + ' damage!')
    return {
        id:closestPlayer.id,
        damage: lifeDrainingClaw.dmg
    }
    
} else if(squareAdjacent && diceRoll + lifeDrainingClaw.att <= closestPlayer.AC){
    console.log("he's right next to you! He missed, but still hits you with ",lifeDrainingClaw.miss + ' damage!')
    return {
        id:closestPlayer.id,
        damage:lifeDrainingClaw.miss
    }

//Within 1 tile of hero, attack
} else if(tileAdjacent){
    if(diceRoll + lifeDrainingClaw.att > closestPlayer.AC){
        console.log("he ain't close, but he is now! AND hits you with ", lifeDrainingClaw.dmg + ' damage!')
        let offsetX = path[0][0]
        let offsetY = path[0][1]
    
        let squareX = monster.x - offsetX + path[path.length-2][0]
        let squareY = monster.y - offsetY + path[path.length-2][1]
        return {
            position:{
                x:squareX,
                y:squareY
            },
            id:closestPlayer.id,
            damage:lifeDrainingClaw.dmg
        }

    } else if(diceRoll + lifeDrainingClaw.att <= closestPlayer.AC){
        console.log("he ain't close, but he is now! He missed clawing you... But still hits with a damage of ", lifeDrainingClaw.miss + '!')
        let offsetX = path[0][0]
        let offsetY = path[0][1]
    
        let squareX = monster.x - offsetX + path[path.length-2][0]
        let squareY = monster.y - offsetY + path[path.length-2][1]
        return {
            position:{
                x:squareX,
                y:squareY
            },
            id:closestPlayer.id,
            damage:lifeDrainingClaw.miss
        }
    }
//Move if too far
} else {
    console.log("he be creepin' on ya")
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

        outerloop:
        for(let i in path){
            let squareX = monster.x - offsetX + path[i][0]
            let squareY = monster.y - offsetY + path[i][1]
            for(let tile of dataSet){
                if(squareX > (tile.x-1)*4 && squareX <= (tile.x-1)*4+4 && squareY > (tile.y-1)*4 && squareY <= (tile.y-1)*4+4){
                    if(tile != monsterTile){
                        nextSquare = {
                            x: squareX,
                            y: squareY
                        }
                        break outerloop
                    }
                }
            }
        }
        
        return {position: nextSquare}
}
}
