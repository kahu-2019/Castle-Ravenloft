//Test data
var playerDetails = {
    adjacentTile:{
        adj:false,
        x:0,
        y:0
    },
    closestPlayer:1,
    playerTile:[[1,1,1,1],
                [0,11,0,0],
                [11,0,0,1],
                [0,0,0,1]],
    players:[{id: 1, name:'Karl', AC:20,x:2,y:2},{id: 2,name:'Sam the Gimp',AC:16,x:1,y:3}]
}

//from pos finder function

var playerPos = {
    tileX: 1,
    tileY:1,
    squareX:3,
    squareY:3
}

var monPos = {
    tileX:2,
    tileY:2,
    squareX:3,
    squareY:3
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


//if not adjacent, move monX - playX, monY - playY
//check if tiles are valid

//values i need
var closestPlayer = playerDetails.players.find(player => player.id == playerDetails.closestPlayer)
var heroes = playerDetails.players
var tileAdjacent = playerDetails.adjacentTile.adj



console.log(closestPlayer)
console.log(tileAdjacent)
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
    var monX = monPos.tileX
    var monY = monPos.tileY
    var playX = playerPos.tileX
    var playY = playerPos.tileY

    var newMonPos = {x:monX - playX,y:monY - playY}

    var tileExists = dataSet.find(tile => {
        tile.x == newMonPos.x && tile.y == newMonPos.y
        return true
    })
    
    console.log('tile Exists:',tileExists)

    if(tileExists != null || tileExists != undefined){
        if(tileExists.grid[monPos.squareY - 1][monPos.squareX - 1] == 0 || tileExists.grid[monPos.squareY][monPos.squareX] == 2){
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

            monPos = {
                tileX:tileExists.x,
                tileY:tileExists.y,
                squareX:square.x,
                squareY:square.y
            }
        }

    }


    
    console.log('coming closer', monPos)

    return monPos
}