import React, { Component } from 'react'
import { connect } from "react-redux";
import { getAllCharacters } from '../actions';

class Characters extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }


    componentDidMount(){
        this.props.dispatch(getAllCharacters())
    }
  render() {
      
    return (
      <div>
          characters jsux
        <ul>
        {this.props.allCharacters.map(character => {
            return(
                <li>
                    <h3>{character.name}</h3>
                    <p><em>{character.subtitle}</em></p>
                    <p>{character.description}</p>
                    <p>AC: {character.AC}</p>
                    <p>HP: {character.HP}</p>
                    <p>Speed: {character.Speed}</p>
                    <p>SurgeValue: {character.SurgeValue}</p>
                </li>
            )
        })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        allCharacters: state.allCharacters
    }
  } 


export default connect(mapStateToProps)(Characters)