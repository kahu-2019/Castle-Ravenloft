// import {diceRoll} from './functions'
const { roll } = require('./functions')
const { isSquareAdjacent } = require('./functions')
const { detailedPosition } = require('./functions')

//Test data
var playerDetails = {
    adjacentTile: false,
    id: 1,
    playerTile: [[1, 1, 1, 1],
    [0, 11, 0, 0],
    [11, 0, 0, 1],
    [0, 0, 0, 1]],
    players: [{ id: 1, name: 'Karl', AC: 20, x: 2, y: 2 }, { id: 2, name: 'Sam the Gimp', AC: 16, x: 1, y: 3 }],
    monster: { id: 1, name: 'blazing skeleton', x: 1, y: 1 },
    dataSet: [{
        x: 1, y: 1, grid: [
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 2, 1, 1],
            [0, 0, 0, 0]
        ]
    },
    {
        x: 1, y: 2, grid: [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0]
        ]
    },
    {
        x: 2, y: 2, grid: [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0]
        ]
    }]
}

export default function blazingSkeleton(playerDetails) {
    //values i need
    var closestPlayer = playerDetails.id
    var heroes = playerDetails.players
    var tileAdjacent = playerDetails.adjacent
    var squareAdjacent = false
    var path = playerDetails.path
    var monster = playerDetails.monster
    var dataSet = playerDetails.dataSet

    if (playerDetails.players) {
        closestPlayer = playerDetails.players.find(player => player.id == playerDetails.id)
    }




    //from pos finder function with player.x and player.y, monster.x and monster.y
    //DETAILED POSITION
    var playerPos = detailedPosition(closestPlayer)

    var monPos = detailedPosition(playerDetails.monster)


    //Checks for square adjacent

    if (tileAdjacent) {
        var squareAdjacent = isSquareAdjacent(playerPos.squareX, playerPos.squareY, monPos.squareX, monPos.squareY)
    }




    var whirlwindOfClaws = {
        att: 8,
        dmg: 2,
        miss: 1,
    }

    var diceRoll = null

    //attack and move
    // if hit then slow else nahh
    if (tileAdjacent || squareAdjacent) {
        var characters = []
        for (var i = 0; i < heroes.length; i++) {
            diceRoll = roll()

            if (diceRoll + whirlwindOfClaws.att > heroes[i].AC) {
                console.log('Oh no!', heroes[i].name + ' got hurt with ' + whirlwindOfClaws.dmg + ' damage!' + ' and slowed!')
                characters.push({
                    id: heroes[i].id,
                    damage: whirlwindOfClaws.dmg,
                    effect: 'slowed'
                })
            } else if (diceRoll + whirlwindOfClaws.att <= heroes[i].AC) {
                console.log('Oh no!', heroes[i].name + ' got hurt with ' + whirlwindOfClaws.miss + ' damage!')
                characters.push({
                    id: heroes[i].id,
                    damage: whirlwindOfClaws.miss
                })
            }
        }
        //still need to figure out movement
        let offsetX = path[0][0]
        let offsetY = path[0][1]

        let squareX = monster.x - offsetX + path[path.length - 2][0]
        let squareY = monster.y - offsetY + path[path.length - 2][1]
        return {
            position: {
                x: squareX,
                y: squareY
            },
            characters
        }
    } else { return {} }
}