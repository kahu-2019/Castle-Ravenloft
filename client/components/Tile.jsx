import React, { Component } from 'react'
import Square from './Square'

class Tile extends Component {
    constructor(props){
        super(props)

        this.state = {
            tile: this.props.tile

        }
    }

    componentWillReceiveProps(props) {
        this.setState({tile: props.tile})
    }

    render() {
        return (
        <div className='tile'>
            {this.state.tile.map((row, x) => {
                return row.map((square, y) => {
                    return <Square square={square} x={x} y={y} />
                })
            })}
        </div>
        )
    }
}

export default Tile
