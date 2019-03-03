import React, { Component } from 'react'
import Tile from './Tile'

/*  Main board component, renders tile and square sub-components

    In state:
        testSets should be replaced with the actual datasets used during play
        sets is a temp set that should contain the player and monster positions
        Player represents a single player
*/

class Board extends Component {
    constructor(props){
        super(props)

        this.state = {
            players : [
                {
                    x: 6,
                    y: 2
                },

                {
                    x: 4,
                    y: 3
                },
                
                {
                    x: 2,
                    y: 3
                }
            ],

            transform: {
                dragging: false,
                startX: undefined,
                endX: undefined,
                x: 0,
                y: 0
            },

            sets: [],

            testSets: [
                {
                    grid:[
                    [0,1,1,1],
                    [0,0,0,0],
                    [0,0,2,0],
                    [1,0,0,0]
                    ],
                    x:1,
                    y:1,
                },
                {
                    grid:[
                    [1,1,1,1],
                    [0,0,0,2],
                    [0,0,0,0],
                    [0,0,0,0]
                    ],
                    x:2,
                    y:1,
                },
                {
                    grid:[
                    [1,2,0,0],
                    [1,0,0,0],
                    [1,0,0,0],
                    [1,0,0,0]
                    ],
                    x:1,
                    y:2,
                },
                {
                    grid:[
                    [0,0,0,0],
                    [0,1,0,0],
                    [0,0,1,0],
                    [0,0,0,0]
                    ],
                    x:2,
                    y:2,
                }
    
            ]
        }

        this.keypress = this.keypress.bind(this)
        this.getPositionOfCharacter = this.getPositionOfCharacter.bind(this)
        this.addTile = this.addTile.bind(this)
        this.testAddTile = this.testAddTile.bind(this)
        this.nextPlayer = this.nextPlayer.bind(this)
        this.processCharacters = this.processCharacters.bind(this)
        this.mouseDown = this.mouseDown.bind(this)
        this.mouseUp = this.mouseUp.bind(this)
        this.mouseMove = this.mouseMove.bind(this)
        this.getTileAndSquareForCharacter = this.getTileAndSquareForCharacter.bind(this)
        this.rotateTile = this.rotateTile.bind(this)
    }

    componentDidMount(){
        window.oncontextmenu = (e) => {
            e.preventDefault();
          }
        document.addEventListener("keydown", this.keypress, false);
        this.setState({sets: this.state.testSets}, () => {
            this.processCharacters()
        })
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.keypress, false);
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
                this.testAddTile()
                break
            case "s":
                this.nextPlayer()
        }
    }

    //  Changes the positions of players in the 'players' array stored in state
    //  The player in first position gets placed last, i.e: [1,2,3,4] -> [2,3,4,]
    nextPlayer(){
        let temp = this.state.players
        temp.push(temp.shift())
        this.setState({players:temp})
    }

    testAddTile(){
        let tile = [
            [1,0,0,0],
            [0,0,0,0],
            [0,0,2,0],
            [0,0,0,0]
        ]
        let position = {
            x:2,
            y:0
        }
        this.addTile(tile, position)
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

    prepTileForAdding(side){
        // get a new tile
        let testTile = [
            [1,0,0,0],
            [0,0,0,0],
            [0,0,2,0],
            [0,0,0,0]
        ]
        
        let playerPos = this.getTileAndSquareForCharacter(this.state.players[0])
        switch(side){
            case 0:
                if(playerPos.squareY === 0){
                    let tileAlreadyExists = false
                    for(let item of this.state.testSets){
                        if(item.y === playerPos.tileY-1 && item.x === playerPos.tileX){
                            tileAlreadyExists = true
                            break
                        }
                    }
                    if(!tileAlreadyExists){
                        let tile = this.rotateTile(testTile, side)
                        this.addTile(tile, {x: playerPos.tileX, y: playerPos.tileY-1})
                        return
                    }
                }
                break
            case 1:
                if(playerPos.squareX === 3){
                    let tileAlreadyExists = false
                    for(let item of this.state.testSets){
                        if(item.y === playerPos.tileY && item.x === playerPos.tileX+1){
                            tileAlreadyExists = true
                            break
                        }
                    }
                    if(!tileAlreadyExists){
                        let tile = this.rotateTile(testTile, side)
                        this.addTile(tile, {x: playerPos.tileX+1, y: playerPos.tileY})
                        return
                    }
                }
                break
            case 2:
                if(playerPos.squareY === 3){
                    let tileAlreadyExists = false
                    for(let item of this.state.testSets){
                        if(item.y === playerPos.tileY+1 && item.x === playerPos.tileX){
                            tileAlreadyExists = true
                            break
                        }
                    }
                    if(!tileAlreadyExists){
                        let tile = this.rotateTile(testTile, side)
                        this.addTile(tile, {x: playerPos.tileX, y: playerPos.tileY+1})
                        return
                    }
                }
                break
            case 3:
                if(playerPos.squareX === 0){
                    let tileAlreadyExists = false
                    for(let item of this.state.testSets){
                        if(item.y === playerPos.tileY && item.x === playerPos.tileX-1){
                            tileAlreadyExists = true
                            break
                        }
                    }
                    if(!tileAlreadyExists){
                        let tile = this.rotateTile(testTile, side)
                        this.addTile(tile, {x: playerPos.tileX-1, y: playerPos.tileY})
                        return
                    }
                }
                break
        }
    }

    //  Adds a tile to a given position, tile should be a 2d array, position should be an object with x and y keys
    addTile(tile, position){
        let tempSet = JSON.parse(JSON.stringify(this.state.testSets)) // Creates a deep copy of the array
        let tempPlayers = this.state.players

        if(position.x === 0){
            for(let item in tempSet){
                tempSet[item].x = tempSet[item].x + 1
            }
            tempPlayers.map(player => {
                return player.x = player.x + 4
            })
            tempSet.push({
                grid:tile,
                x: position.x+1,
                y: position.y
            })
            this.setState({
                players: tempPlayers,
                testSets: tempSet
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
            tempSet.push({
                grid:tile,
                x: position.x,
                y: position.y+1
            })
            this.setState({
                players: tempPlayers,
                testSets: tempSet
            }, () => this.processCharacters())
            return
        }

        tempSet.push({
            grid:tile,
            x: position.x,
            y: position.y
        })
        this.setState({
            testSets: tempSet
        }, () => this.processCharacters())
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
        for(let item of this.state.testSets){
            if(position.tileX === item.x && position.tileY === item.y){
                tileExists = true
                if(item.grid[position.squareY][position.squareX] === 1) {
                    char[dir] = char[dir] - val
                    break
                }
            }
        }
        if(!tileExists)char[dir] = char[dir] - val
        let tempPlayers = this.state.players
        tempPlayers[0] = char
        this.setState({players: tempPlayers}, () => this.processCharacters())
    }
    
    //  Gets the position of every character, and puts them on the 'sets' stored in state
    processCharacters(){
        let tempSet = JSON.parse(JSON.stringify(this.state.testSets)) // Creates a deep copy of the array

        outerloop:
        for(let char of this.state.players){

            let position = this.getTileAndSquareForCharacter(char)

            for(let item of tempSet){
                if(position.tileX === item.x && position.tileY === item.y){
                    item.grid[position.squareY][position.squareX] = 11
                    continue outerloop
                }
            }
        }
        this.setState({sets: tempSet})
    }
    
    render() {
        let rows = 0
        let cols = 0
        this.state.sets.map(set => {
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
                    {this.state.sets && this.state.sets.map((set, key) => {
                        return (<div key={key} style={{'gridColumnStart':set.x, 'gridColumnEnd':set.x+1, 'gridRowStart':set.y, 'gridRowEnd':set.y+1}}>
                            <Tile tile={set.grid} />
                            </div>)
                    })}
                </div>
            </div>
            <div style={{position:'absolute', top:'10px', left:'10px'}}>
                <button onClick={() => this.prepTileForAdding(3)}>Explore left</button>
                <button onClick={() => this.prepTileForAdding(1)}>Explore right</button>
                <button onClick={() => this.prepTileForAdding(0)}>Explore top</button>
                <button onClick={() => this.prepTileForAdding(2)}>Explore bottom</button>
            </div>
        </React.Fragment>
        )
    }
}

export default Board
