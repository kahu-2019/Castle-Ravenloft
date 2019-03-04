import React, { Component } from 'react'
import Square from './Square'

class Tile extends Component {
    constructor(props){
        super(props)

        this.state = {
            grid: this.props.tile.grid,
            image: this.props.tile.image,
            rotation: this.props.tile.rotation || 0,
            players: this.props.tile.players
        }
    }

    componentWillReceiveProps(props) {
        this.setState({grid: props.tile.grid,
            image: props.tile.image,
            rotation: props.tile.rotation || 0,
            players: props.tile.players
        })
    }

    render() {
        console.log(this.state.players)
        return (
        <div>
            <div style={{position: 'absolute'}}> 
                <img src={this.state.image} style={{
                    maxHeight: '200px',
                    maxWidth: '200px',
                    WebkitTransform: `rotate(${90*this.state.rotation}deg)`,
                    MozTransform: `rotate(${90*this.state.rotation}deg)`,
                    OTransform: `rotate(${90*this.state.rotation}deg)`,
                    MsTransform: `rotate(${90*this.state.rotation}deg)`,
                    transform: `rotate(${90*this.state.rotation}deg)`}} />
            </div>
            <div className='tile' style={{position: 'absolute'}}>
                {this.state.grid.map((row, y) => {
                    return row.map((square, x) => {
                        let tempPlayer =undefined

                        for(let player of this.state.players){
                            if(player.x === x && player.y === y){
                                tempPlayer = player
                                break
                            }
                        }

                        if(tempPlayer) {return <Square key={`${x},${y}`} square={square} x={x} y={y} image={tempPlayer.image}/>}
                        return <Square key={`${x},${y}`} square={square} x={x} y={y} image={null}/>
                    })
                })}
            </div>
        </div>
        )
    }
}

export default Tile
