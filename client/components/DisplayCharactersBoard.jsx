import React, { Component } from 'react'
// import character from ""
export default class DisplayCharactersBoard extends Component {
    constructor(props){
    super(props)

    this.state = {  
        character: {
            AC:14,
            HP:6,
            speed:6,
            SurgeValue:3,
            name: 'Immeril'
            
        }
    }
}

  render() {
    console.log(this.props.player)
    return (
      <div className="characterBoardDiv">
        <div><img className="characterBoardView" src={"./images/icons/"+this.props.player[0].name+".jpg"}/></div>
        <div>{this.props.player[0].name}</div>
        <div> HP: {this.props.player[0].HP}</div>
        <div> AC: {this.props.player[0].AC}</div>
        <div> Speed: {this.props.player[0].speed}</div>
        <div> Surge: {this.props.player[0].SurgeValue}</div>


      </div>
    )
  }

  
  }

