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
            player : {
                x: 6,
                y: 2
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

    }

    componentDidMount(){
        document.addEventListener("keydown", this.keypress, false);
        this.setState({sets: this.state.testSets}, () => {
            this.getPositionOfCharacter(this.state.player, 'x', 0)
        })
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.keypress, false);
    }

    keypress(event) {
        event.preventDefault()
        let key = event.key

        switch(key){
            case "ArrowDown":
                this.getPositionOfCharacter(this.state.player, 'y', 1)
                break
            case "ArrowUp":
                this.getPositionOfCharacter(this.state.player, 'y', -1)
                break
            case "ArrowRight":
                this.getPositionOfCharacter(this.state.player, 'x', 1)
                break
            case "ArrowLeft":
                this.getPositionOfCharacter(this.state.player, 'x', -1)
                break
            case "t":
                this.testAddTile()
                break
        }
    }

    testAddTile(){
        let tile = [
            [1,0,0,0],
            [0,0,0,0],
            [0,0,2,0],
            [0,0,0,0]
        ]
        let position = {
            x:1,
            y:0
        }
        this.addTile(tile, position)
    }

    addTile(tile, position){
        let tempSet = JSON.parse(JSON.stringify(this.state.testSets)) // Creates a deep copy of the array
        let tempPlayer = this.state.player

        if(position.x === 0){
            for(let item in tempSet){
                tempSet[item].x = tempSet[item].x + 1
            }
            tempPlayer.x = tempPlayer.x + 4
            tempSet.push({
                grid:tile,
                x: position.x+1,
                y: position.y
            })
            this.setState({
                player: tempPlayer,
                testSets: tempSet
            }, () => this.getPositionOfCharacter(this.state.player, 'x', 0))
            return
        }
        else if(position.y === 0){
            for(let item in tempSet){
                tempSet[item].y = tempSet[item].y + 1
            }
            tempPlayer.y = tempPlayer.y + 4
            tempSet.push({
                grid:tile,
                x: position.x,
                y: position.y+1
            })
            this.setState({
                player: tempPlayer,
                testSets: tempSet
            }, () => this.getPositionOfCharacter(this.state.player, 'x', 0))
            return
        }

        tempSet.push({
            grid:tile,
            x: position.x,
            y: position.y
        })
        this.setState({
            testSets: tempSet
        }, () => this.getPositionOfCharacter(this.state.player, 'x', 0))
    }

    getPositionOfCharacter(char, dir, val){
        let temp = JSON.parse(JSON.stringify(this.state.testSets)) // Creates a deep copy of the array
        if(char[dir]+val < 1) return

        char[dir] = char[dir] + val

        let tileX = Math.floor(char.x/4) + ((char.x % 4 === 0) ? 0 : 1)
        let squareX = (char.x-1) % 4 
        let tileY = Math.floor(char.y/4) + ((char.y % 4 === 0) ? 0 : 1)
        let squareY = (char.y-1) % 4 

        for(let item of temp){
            if(tileX === item.x && tileY === item.y){
                if(item.grid[squareY][squareX] === 1) {
                    char[dir] = char[dir] - val
                    temp = this.state.sets
                    break
                }
                else{
                    item.grid[squareY][squareX] = 11
                    break
                }
            }
        }
        this.setState({sets: temp})
    }

    render() {
        return (
        <div className='board'>
            {this.state.sets && this.state.sets.map((set, key) => {
                return (<div key={key} style={{'gridColumnStart':set.x, 'gridColumnEnd':set.x+1, 'gridRowStart':set.y, 'gridRowEnd':set.y+1}}>
                    <Tile tile={set.grid} />
                    </div>)
            })}
        </div>
        )
    }
}

export default Board
