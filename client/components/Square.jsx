import React, { Component } from 'react'

class Square extends Component {
    constructor(props){
        super(props)
        this.state = {
            type: this.props.square,
            x: this.props.x + 1,
            y: this.props.y + 1,

            style:{}
        }

        this.updateStyle = this.updateStyle.bind(this)
    }

    componentWillReceiveProps(props) {
        this.setState({type: props.square}, () => this.updateStyle())
    }

    componentDidMount(){
        this.updateStyle()
    }
    
    updateStyle(){
        this.setState({style: {
            'backgroundColor':(this.state.type === 11 ? 'green' : 'rgba(0,0,0,0)'),
            'gridColumnStart':this.state.y,
            'gridColumnEnd':this.state.y+1,
            'gridRowStart':this.state.x,
            'gridRowEnd':this.state.x+1
        }})
    }


    render() {
        return (
        <div style={this.state.style}>
        </div>
        )
    }
}

export default Square
