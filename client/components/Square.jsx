import React, { Component } from 'react'

class Square extends Component {
    constructor(props){
        super(props)
        this.state = {
            type: this.props.square,
            x: this.props.x + 1,
            y: this.props.y + 1,
            image: this.props.image || undefined,
            style:{}
        }

        this.updateStyle = this.updateStyle.bind(this)
    }

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props){
            this.setState({
                type: this.props.square,
                image: this.props.image || undefined
            }, () => this.updateStyle())
        }
    }

    componentDidMount(){
        this.updateStyle()
    }
    
    updateStyle(){
        this.setState({style: {
            'gridColumnStart':this.state.x,
            'gridColumnEnd':this.state.x+1,
            'gridRowStart':this.state.y,
            'gridRowEnd':this.state.y+1
        }})
    }


    render() {
        return (
        <div style={this.state.style}>
        {(this.state.type === 11 || this.state.type === 21) && <img src={this.state.image} style={{
                    maxHeight: '50px',
                    maxWidth: '50px'}} />}
        </div>
        )
    }
}

export default Square
