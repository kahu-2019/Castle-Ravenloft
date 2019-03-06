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
    return (

      <div>
        <div> AC: {this.state.character.AC}</div>
        <div> HP: {this.state.character.HP}</div>
        <div> Speed: {this.state.character.speed}</div>
        <div> Surgevalue: {this.state.character.SurgeValue}</div>
        <div> Name: {this.state.character.name}</div>


      </div>
    )
  }

  
  }


