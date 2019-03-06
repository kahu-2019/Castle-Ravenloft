import React, { Component } from 'react'
import { connect } from 'react-redux';
import {updateLevel} from '../actions'

class LevelUp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            characterId: 1,
            character1: {

            },
            isVisible: false,
            diceRoll: 20,
            pooledXP : 7

    
        }
    }


    componentDidMount () {
        if(this.state.diceRoll == 20 && this.state.pooledXP >= 5 ){
            console.log('hit')
            this.setState({isVisible: true})
       }
    }

    getCurrentCharacter = () => {
        console.log(this.props.characters, this.state.characterId)
        let p = this.props.characters.find(character => character.id === this.state.characterId)       
        console.log(p)
        return p
    }

 

    




    render() {
        
    console.log(this.state.isVisible )
    
        return (
        


            <div>
            // replace hardcoded 3 with "this.props.id"
            {this.state.isVisible && <button className= "btn btn-danger" onClick={ () => { this.state.isVisible = false ;  this.props.updateLevel(3)}}> Level Up </button>} 
            </div>
        )
    }
}

  function mapStateToProps(state) {
    return { 
       characters: state.characters
  }
}

 function mapDispatchToProps (dispatch)  {
     return {
    updateLevel: (character) => { dispatch(updateLevel(character)) }
     }
}




 
export default connect(mapStateToProps,mapDispatchToProps)(LevelUp) 


