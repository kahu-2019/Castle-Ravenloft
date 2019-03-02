import React, { Component } from 'react'
import Tile from './Tile'

class Board extends Component {
    constructor(props){
        super(props)

        this.state = {
            player : {
                x: 6,
                y: 2
            },

            sets: [],

            testsets: [
                {
                    grid:[
                    [1,1,1,1],
                    [1,0,0,0],
                    [1,0,2,0],
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
                }
    
            ]
        }

        this.keypress = this.keypress.bind(this)
        this.getPositionOfCharacter = this.getPositionOfCharacter.bind(this)
    }

    componentDidMount(){
        document.addEventListener("keydown", this.keypress, false);
        this.getPositionOfCharacter()
    }
    componentWillUnmount(){
        document.removeEventListener("keydown", this.keypress, false);
    }

    keypress(event) {
        event.preventDefault()
        let key = event.key

        switch(key){
            case "ArrowDown":
                this.setState(prevState => ({
                    player: {
                        ...prevState.player,
                        y: prevState.player.y+1
                    }
                }), () => this.getPositionOfCharacter())
                break
            case "ArrowUp":
                this.setState(prevState => ({
                    player: {
                        ...prevState.player,
                        y: prevState.player.y-1
                    }
                }), () => this.getPositionOfCharacter())
                break
            case "ArrowRight":
                this.setState(prevState => ({
                    player: {
                        ...prevState.player,
                        x: prevState.player.x+1
                    }
                }), () => this.getPositionOfCharacter())
                break
            case "ArrowLeft":
                this.setState(prevState => ({
                    player: {
                        ...prevState.player,
                        x: prevState.player.x-1
                    }
                }), () => this.getPositionOfCharacter())
                break
        }
    }

    getPositionOfCharacter(){
        let temp = JSON.parse(JSON.stringify(this.state.testsets)) // Creates a deep copy of the array
        let tileX = Math.floor(this.state.player.x/4) + ((this.state.player.x % 4 === 0) ? 0 : 1)
        let squareX = (this.state.player.x-1) % 4 
        let tileY = Math.floor(this.state.player.y/4) + ((this.state.player.y % 4 === 0) ? 0 : 1)
        let squareY = (this.state.player.y-1) % 4 

        for(let item of temp){
            if(tileX === item.x && tileY === item.y){
                item.grid[squareY][squareX] = 11
                break
            }
        }
        this.setState({sets: temp})
    }

    render() {
        return (
        <div className='board'>
            {this.state.sets.map((set, key) => {
                return (<div key={key} style={{'gridColumnStart':set.x, 'gridColumnEnd':set.x+1, 'gridRowStart':set.y, 'gridRowEnd':set.y+1}}>
                    <Tile tile={set.grid} />
                    </div>)
            })}
        </div>
        )
    }
}

export default Board
