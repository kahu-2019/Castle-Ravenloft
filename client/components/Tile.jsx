import React, { Component } from 'react'
import Square from './Square'

class Tile extends Component {
    constructor(props){
        super(props)

        this.state = {
            grid: this.props.tile.grid,
            image: this.props.tile.image,
            rotation: this.props.tile.rotation || 0
        }
    }

    componentWillReceiveProps(props) {
        this.setState({grid: props.tile.grid,
            image: props.tile.image,
            rotation: props.tile.rotation || 0})
    }

    render() {
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
                {this.state.grid.map((row, x) => {
                    return row.map((square, y) => {
                        return <Square key={`${x},${y}`} square={square} x={x} y={y} />
                    })
                })}
            </div>
        </div>
        )
    }
}

export default Tile
