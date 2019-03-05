import React, { Component } from 'react'
import Tile from './Tile'
import { connect } from "react-redux";
import PF from 'pathfinding'

import allTiles from '../../public/game_assets/tiles.json'
import { getAllMonsters } from '../actions';

/*  Main board component, renders tile and square sub-components

    In state:
        cleanTileSet should be replaced with the actual datasets used during play
        dataSet is a temp set that should contain the player and monster positions
        Player represents a single player
*/

class Board extends Component {
    constructor(props){
        super(props)

        this.state = {
            players: this.props.characters,

            monsters: [],

            allMonsters: this.props.allMonsters,

            transform: {
                dragging: false,
                startX: undefined,
                endX: undefined,
                x: 0,
                y: 0
            },

            explore: {
                top: false,
                bottom: false,
                left: false,
                right: false
            },

            //Dataset includes every tile currently in play, with the players and monsters placed on it
            dataSet: [],

            //  cleanTileSet includes every tile currently in play, the starting tile is already given
            cleanTileSet: [
                {
                    "id": 29,
                    "image":"images/tiles/20.jpg",           
                    "grid": [
                        [1,1,1,1],
                        [0,0,0,0],
                        [0,2,0,0],
                        [0,0,0,0]
                    ],
                    "arrow":false,
                    "skull":true,
                    "name": "Strahds Crypt",
                    x: 1,
                    y: 1,
                    players: []
                },
            ],

            completeTileSet: []
        }

        this.keypress = this.keypress.bind(this)
        this.getPositionOfCharacter = this.getPositionOfCharacter.bind(this)
        this.addTile = this.addTile.bind(this)
        this.nextPlayer = this.nextPlayer.bind(this)
        this.processCharacters = this.processCharacters.bind(this)
        this.mouseDown = this.mouseDown.bind(this)
        this.mouseUp = this.mouseUp.bind(this)
        this.mouseMove = this.mouseMove.bind(this)
        this.getTileAndSquareForCharacter = this.getTileAndSquareForCharacter.bind(this)
        this.rotateTile = this.rotateTile.bind(this)
        this.checkSidesOfCharacter = this.checkSidesOfCharacter.bind(this)
        this.diceRoll = this.diceRoll.bind(this)
        this.getMonster = this.getMonster.bind(this)
        this.monsterPathfinder = this.monsterPathfinder.bind(this)
        this.checkAdjacentSquares = this.checkAdjacentSquares.bind(this)
    }

    componentDidMount(){
        this.props.dispatch(getAllMonsters())
        window.oncontextmenu = (e) => {
            e.preventDefault();
        }
        document.addEventListener("keydown", this.keypress, false);

        let temp = allTiles
        temp.splice(-2, 2) //   Remove start tiles from array

        //  Removes strahds crypt tile for the starting piece
        let strahdsCrypt = temp.splice(29,1)
        strahdsCrypt[0].x = 1
        strahdsCrypt[0].y = 1

        //  Removes Secret Stairway tile for the ending piece
        let endingPiece = temp.splice(29,1)[0]

        this.setState({dataSet: strahdsCrypt, cleanTileSet: strahdsCrypt, completeTileSet: temp, endingPiece}, () => {
            this.processCharacters()
        })
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.keypress, false);
    }

    componentDidUpdate(prevProps){
        if(this.props.allMonsters !== prevProps.allMonsters){
            this.setState({allMonsters: this.props.allMonsters})
        }
    }

    mouseDown(event){
        if(event.button === 2){
            event.stopPropagation()
            event.preventDefault()
            let temp = this.state.transform
            temp.dragging=true
            temp.startX = event.screenX - this.state.transform.x
            temp.startY = event.screenY - this.state.transform.y
            this.setState({transform: temp})
        }
    }

    mouseUp(event){
        if(event.button === 2){
            event.stopPropagation()
            event.preventDefault()
            let temp = this.state.transform
            temp.dragging = false
            this.setState({transform: temp})
        }
    }

    mouseMove(event){
        if(this.state.transform.dragging){
            let temp = this.state.transform
            temp.x = event.screenX - this.state.transform.startX
            temp.y = event.screenY - this.state.transform.startY
            this.setState({transform: temp})
        }
    }

    //  Processes keypress events
    keypress(event) {
        event.preventDefault()
        let key = event.key

        switch(key){
            case "ArrowDown":
                this.getPositionOfCharacter(this.state.players[0], 'y', 1)
                break
            case "ArrowUp":
                this.getPositionOfCharacter(this.state.players[0], 'y', -1)
                break
            case "ArrowRight":
                this.getPositionOfCharacter(this.state.players[0], 'x', 1)
                break
            case "ArrowLeft":
                this.getPositionOfCharacter(this.state.players[0], 'x', -1)
                break
            case "t":
                this.monsterPathfinder(this.state.monsters[0])
                break
        }
    }

    //  Generates a random number between 1 and 20 inclusive
    diceRoll(){
        return Math.floor(Math.random()*20) + 1
    }

    //  Changes the positions of players in the 'players' array stored in state
    //  The player in first position gets placed last, i.e: [1,2,3,4] -> [2,3,4,]
    nextPlayer(){
        let temp = this.state.players
        temp.push(temp.shift())
        this.setState({players:temp}, () => this.checkSidesOfCharacter())
    }

    //  Constructs one large array from every square on every tile, necessary for pathfinding library
    checkAdjacentSquares(){
        let cols = 12 //    3 tiles -> 12 Squares
        let rows = 12 //    3 tiles -> 12 Squares
        // this.state.dataSet.map(set => {
        //     if(set.x > cols) cols = set.x
        //     if(set.y > rows) rows = set.y
        // })
        // rows*=4
        // cols*=4
        let bigArray = JSON.parse(JSON.stringify(new Array(rows).fill(new Array(cols).fill(1))))

        let tempMonster = {
            x: 6,
            y: 6
        }

        let coords = this.getTileAndSquareForCharacter(tempMonster)
        console.log(coords)

        let centerTile = null
        let leftTile = null
        let rightTile = null
        let topTile = null
        let bottomTile = null

        this.state.dataSet.map(tile => {
            if(tile.x === coords.tileX-1 && tile.y === coords.tileY) leftTile   = tile
            if(tile.x === coords.tileX+1 && tile.y === coords.tileY) rightTile  = tile
            if(tile.x === coords.tileX && tile.y === coords.tileY-1) topTile    = tile
            if(tile.x === coords.tileX && tile.y === coords.tileY+1) bottomTile = tile
            if(tile.x === coords.tileX && tile.y === coords.tileY)   centerTile = tile
        })

        //  Center tile
        for(let y = 0; y < centerTile.grid.length; y++){
            for(let x = 0; x < centerTile.grid[y].length; x++){
                bigArray[4 + Number(y)][4 + Number(x)] = centerTile.grid[y][x]
            }
        }

        if(leftTile){
            for(let y = 0; y < leftTile.grid.length; y++){
                for(let x = 0; x < leftTile.grid[y].length; x++){
                    bigArray[4 + Number(y)][x] = leftTile.grid[y][x]
                }
            }
        }
        if(rightTile){
            for(let y = 0; y < rightTile.grid.length; y++){
                for(let x = 0; x < rightTile.grid[y].length; x++){
                    bigArray[4 + Number(y)][8 + Number(x)] = rightTile.grid[y][x]
                }
            }
        }
        if(topTile){
            for(let y = 0; y < topTile.grid.length; y++){
                for(let x = 0; x < topTile.grid[y].length; x++){
                    bigArray[y][4 + Number(x)] = topTile.grid[y][x]
                }
            }
        }
        if(bottomTile){
            for(let y = 0; y < bottomTile.grid.length; y++){
                for(let x = 0; x < bottomTile.grid[y].length; x++){
                    bigArray[8 + Number(y)][4 + Number(x)] = bottomTile.grid[y][x]
                }
            }
        }
        
        // this.state.dataSet.map(tile => {
        //     for(let y = 0; y < tile.grid.length; y++){
        //         for(let x = 0; x < tile.grid[y].length; x++){
        //             bigArray[(Number(tile.y)-1)*4 + Number(y)][(Number(tile.x)-1)*4 + Number(x)] = tile.grid[y][x]
        //         }
        //     }
        // })
        console.log(bigArray)
    }

    //  Constructs one large array from every square on every tile, necessary for pathfinding library
    monsterPathfinder(monster){
        let cols = 0
        let rows = 0

        this.state.dataSet.map(set => {
            if(set.x > cols) cols = set.x
            if(set.y > rows) rows = set.y
        })

        rows*=4
        cols*=4

        let bigArray = JSON.parse(JSON.stringify(new Array(rows).fill(new Array(cols).fill(1))))

        this.state.dataSet.map(tile => {
            for(let y = 0; y < tile.grid.length; y++){
                for(let x = 0; x < tile.grid[y].length; x++){
                    bigArray[(Number(tile.y)-1)*4 + Number(y)][(Number(tile.x)-1)*4 + Number(x)] = (tile.grid[y][x] === 2 || tile.grid[y][x] === 11 || tile.grid[y][x] === 21) ? 0 : tile.grid[y][x]
                }
            }
        })

        let grid = new PF.Grid(bigArray)
        let finder = new PF.AStarFinder()
        let path = finder.findPath(Number(monster.x)-1, Number(monster.y)-1, Number(this.state.players[0].x)-1, Number(this.state.players[0].y)-1, grid)
        console.log(path)

    }

    //  Rotates 2d arrays of size n*n (equal on both sides)
    rotateTile(inputArray, num){
        if(num === 0) return inputArray
        
        inputArray.reverse()
        for(var n = 0; n < inputArray.length; n++){
          for(var i = 0; i < n; i++){
            let temp = inputArray[n][i]
            inputArray[n][i] = inputArray[i][n]
            inputArray[i][n] = temp
          }
        }
      
        return this.rotateTile(inputArray, num-1)
    }

    //  Preps tile for adding, checks should already be done in this.checkSidesOfPlayer(), rotating tile to correct orientation
    prepTileForAdding(side){
        // get a new tile
        let tileIndex = Math.floor(Math.random()*this.state.completeTileSet.length)
        if(this.state.completeTileSet < 1) return
        let newTile = this.state.completeTileSet.splice(tileIndex, 1)[0]
        

        let tile = undefined

        let playerPos = this.getTileAndSquareForCharacter(this.state.players[0])
        switch(side){
            case 0:
                tile = this.rotateTile(newTile.grid, side)
                newTile.grid = tile
                newTile.rotation = 0
                this.addTile(newTile, {x: playerPos.tileX, y: playerPos.tileY-1})
                break
            case 1:
                tile = this.rotateTile(newTile.grid, side)
                newTile.grid = tile
                newTile.rotation = 1
                this.addTile(newTile, {x: playerPos.tileX+1, y: playerPos.tileY})
                break
            case 2:
                tile = this.rotateTile(newTile.grid, side)
                newTile.grid = tile
                newTile.rotation = 2
                this.addTile(newTile, {x: playerPos.tileX, y: playerPos.tileY+1})
                break
            case 3:
                tile = this.rotateTile(newTile.grid, side)
                newTile.grid = tile
                newTile.rotation = 3
                this.addTile(newTile, {x: playerPos.tileX-1, y: playerPos.tileY})
                break
        }
    }

    //  Adds a tile to a given position, tile should be a 2d array, position should be an object with x and y keys
    addTile(tile, position){
        let tempSet = JSON.parse(JSON.stringify(this.state.cleanTileSet)) // Creates a deep copy of the array
        let tempPlayers = this.state.players

        if(position.x === 0){
            for(let item in tempSet){
                tempSet[item].x = tempSet[item].x + 1
            }
            tempPlayers.map(player => {
                return player.x = player.x + 4
            })
            this.state.monsters.map(monster => {
                return monster.x = monster.x + 4
            })
            tile.x = position.x+1
            tile.y = position.y
            tempSet.push(tile)

            let monster = {}
            monsterFinder:
            for(let y in tile.grid){
                for(let x in tile.grid){
                    if(tile.grid[y][x] === 2){
                        monster.x = (Number(tile.x)-1)*4+Number(x)+1
                        monster.y = (Number(tile.y)-1)*4+Number(y)+1
                        break monsterFinder
                    } 
                }
            }
            this.state.monsters.push(this.getMonster(monster.x, monster.y, this.state.players[0].id))

            this.setState({
                players: tempPlayers,
                cleanTileSet: tempSet,
            }, () => this.processCharacters())
            return
        }
        else if(position.y === 0){
            for(let item in tempSet){
                tempSet[item].y = tempSet[item].y + 1
            }
            tempPlayers.map(player => {
                return player.y = player.y + 4
            })
            this.state.monsters.map(monster => {
                return monster.y = monster.y + 4
            })
            tile.x = position.x
            tile.y = position.y+1
            tempSet.push(tile)

            let monster = {}
            monsterFinder:
            for(let y in tile.grid){
                for(let x in tile.grid){
                    if(tile.grid[y][x] === 2){
                        monster.x = (Number(tile.x)-1)*4+Number(x)+1
                        monster.y = (Number(tile.y)-1)*4+Number(y)+1
                        break monsterFinder
                    } 
                }
            }
            this.state.monsters.push(this.getMonster(monster.x, monster.y, this.state.players[0].id))

            this.setState({
                players: tempPlayers,
                cleanTileSet: tempSet
            }, () => this.processCharacters())
            return
        }

        tile.x = position.x
        tile.y = position.y
        tempSet.push(tile)

        let monster = {}
        monsterFinder:
        for(let y in tile.grid){
            for(let x in tile.grid){
                if(tile.grid[y][x] === 2){
                    monster.x = (Number(tile.x)-1)*4+Number(x)+1
                    monster.y = (Number(tile.y)-1)*4+Number(y)+1
                    break monsterFinder
                } 
            }
        }
        this.state.monsters.push(this.getMonster(monster.x, monster.y, this.state.players[0].id))

        this.setState({
            cleanTileSet: tempSet
        }, () => this.processCharacters())
    }

    getMonster(x, y, charId){
        let monNum = Math.floor(Math.random()*10)
        let newMonster = JSON.parse(JSON.stringify(this.state.allMonsters[monNum]))
        newMonster.x = x
        newMonster.y = y
        newMonster.owner = charId
        return newMonster
    }

    //  Calculates the tile and square that a character is on
    getTileAndSquareForCharacter(char){
        return {
            tileX: Math.floor(char.x/4) + ((char.x % 4 === 0) ? 0 : 1),
            squareX: (char.x-1) % 4,
            tileY: Math.floor(char.y/4) + ((char.y % 4 === 0) ? 0 : 1),
            squareY: (char.y-1) % 4 
        }
    }

    //  Updates position of character, includes wall and edge detection
    getPositionOfCharacter(char, dir, val){
        if(char[dir]+val < 1) return

        char[dir] = char[dir] + val

        let position = this.getTileAndSquareForCharacter(char)

        let tileExists = false
        for(let item of this.state.cleanTileSet){
            if(position.tileX === item.x && position.tileY === item.y){
                tileExists = true
                if(item.grid[position.squareY][position.squareX] === 1) {
                    char[dir] = char[dir] - val
                    break
                }
            }
        }
        if(!tileExists) char[dir] = char[dir] - val

        let tempPlayers = this.state.players
        tempPlayers[0] = char
        this.setState({players: tempPlayers}, () => this.processCharacters())
    }

    //  Checks each side of the current character, returns an object with values showing if they are on an unexplored edge
    checkSidesOfCharacter(){
        let sides = {top:false,right:false,bottom:false,left:false}
        let playerPos = this.getTileAndSquareForCharacter(this.state.players[0])
        for(let side = 0; side < 4; side++){
            switch(side){
                case 0:
                    if(playerPos.squareY === 0){
                        let tileAlreadyExists = false
                        for(let item of this.state.cleanTileSet){
                            if(item.y === playerPos.tileY-1 && item.x === playerPos.tileX){
                                tileAlreadyExists = true
                                break
                            }
                        }
                        if(!tileAlreadyExists) sides.top = true
                    }
                case 1:
                    if(playerPos.squareX === 3){
                        let tileAlreadyExists = false
                        for(let item of this.state.cleanTileSet){
                            if(item.y === playerPos.tileY && item.x === playerPos.tileX+1){
                                tileAlreadyExists = true
                                break
                            }
                        }
                        if(!tileAlreadyExists) sides.right = true
                    }
                case 2:
                    if(playerPos.squareY === 3){
                        let tileAlreadyExists = false
                        for(let item of this.state.cleanTileSet){
                            if(item.y === playerPos.tileY+1 && item.x === playerPos.tileX){
                                tileAlreadyExists = true
                                break
                            }
                        }
                        if(!tileAlreadyExists) sides.bottom = true
                    }
                case 3:
                    if(playerPos.squareX === 0){
                        let tileAlreadyExists = false
                        for(let item of this.state.cleanTileSet){
                            if(item.y === playerPos.tileY && item.x === playerPos.tileX-1){
                                tileAlreadyExists = true
                                break
                            }
                        }
                        if(!tileAlreadyExists) sides.left = true
                    }
            }
        }
        this.setState({explore: sides})
    }
    
    //  Gets the position of every character and monster, and puts them on the 'dataSet' stored in state
    processCharacters(){
        let tempSet = JSON.parse(JSON.stringify(this.state.cleanTileSet)) // Creates a deep copy of the array

        outerloop:
        for(let char of this.state.players){

            let position = this.getTileAndSquareForCharacter(char)

            for(let item of tempSet){
                if(position.tileX === item.x && position.tileY === item.y){
                    item.grid[position.squareY][position.squareX] = 11
                    item.players.push({image:char.image, x:position.squareX, y:position.squareY})
                    continue outerloop
                }
            }
        }
        
        outerloop:
        for(let monster of this.state.monsters){

            let position = this.getTileAndSquareForCharacter(monster)

            for(let item of tempSet){
                if(position.tileX === item.x && position.tileY === item.y){
                    item.grid[position.squareY][position.squareX] = 21
                    item.players.push({image:monster.image, x:position.squareX, y:position.squareY})
                    continue outerloop
                }
            }
        }

        this.setState({dataSet: tempSet}, this.checkSidesOfCharacter())
    }
    
    render() {
        let rows = 0
        let cols = 0
        this.state.dataSet.map(set => {
            if(set.x > cols) cols = set.x
            if(set.y > rows) rows = set.y
        })
        return (
        <React.Fragment>
            <div className='board-container'>
                <div style={{display:'grid',
                            width: (200*cols)+'px',
                            height: (200*rows)+'px',
                            gridTemplateRows: `repeat(${rows}, 200px)`,
                            gridTemplateColumns: `repeat(${cols}, 200px)`,
                            transform: `translate(${this.state.transform.x}px, ${this.state.transform.y}px)`}}
                            onMouseDown={this.mouseDown} onMouseUp={this.mouseUp} onMouseMove={this.mouseMove}>
                    {this.state.dataSet && this.state.dataSet.map((tile, key) => {
                        return (<div key={key} style={{'gridColumnStart':tile.x, 'gridColumnEnd':tile.x+1, 'gridRowStart':tile.y, 'gridRowEnd':tile.y+1}}>
                            <Tile tile={tile} />
                            </div>)
                    })}
                </div>
            </div>
            <div style={{position:'absolute', top:'10px', left:'10px'}}>
            
                <div className="alert alert-light" style={{color:'black'}}>
                    {this.state.players[0].name}<br />
                </div>
                <button onClick={() => this.nextPlayer()}>End turn</button><br />
                {this.state.explore.left   && <React.Fragment><button onClick={() => this.prepTileForAdding(3)}>Explore left</button><br /></React.Fragment>}
                {this.state.explore.right  && <React.Fragment><button onClick={() => this.prepTileForAdding(1)}>Explore right</button><br /></React.Fragment>}
                {this.state.explore.top    && <React.Fragment><button onClick={() => this.prepTileForAdding(0)}>Explore top</button><br /></React.Fragment>}
                {this.state.explore.bottom && <button onClick={() => this.prepTileForAdding(2)}>Explore bottom</button>}
            </div>
        </React.Fragment>
        )
    }
}

function mapStateToProps(state){
    for(let index in state.characterOrder){
        if(index > 3){
            state.characterOrder[index].x = 1
            state.characterOrder[index].y = 3
        }
        else {
            state.characterOrder[index].x = Number(index)+1
            state.characterOrder[index].y = 4
        }
    }
    return {
        characters: state.characterOrder,
        allMonsters: state.monsters
    }
} 

export default connect(mapStateToProps)(Board)