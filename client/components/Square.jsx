import React, { Component } from 'react'

class Square extends Component {
    constructor(props){
        super(props)
        this.state = {
            type: this.props.square,
            x: this.props.x + 1,
            y: this.props.y + 1,
            image: this.props.image || undefined,
            image: 'images/icons/Alisa.jpg',
            style:{}
        }

        this.updateStyle = this.updateStyle.bind(this)
    }

    componentWillReceiveProps(props) {
        this.setState({
            type: props.square,
            image: props.image || undefined
        }, () => this.updateStyle())
    }

    componentDidMount(){
        this.updateStyle()
    }
    
    updateStyle(){
        this.setState({style: {
            // 'backgroundColor':(this.state.type === 11 ? 'green' : 'rgba(0,0,0,0)'),
            'gridColumnStart':this.state.x,
            'gridColumnEnd':this.state.x+1,
            'gridRowStart':this.state.y,
            'gridRowEnd':this.state.y+1
        }})
    }


    render() {
        return (
        <div style={this.state.style}>
        {this.state.type === 11 && <img src={this.state.image} style={{
                    maxHeight: '50px',
                    maxWidth: '50px'}} />}
        </div>
        )
    }
}

export default Square
