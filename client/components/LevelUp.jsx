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


    getCurrentCharacter = () => {
        console.log(this.props.characters, this.state.characterId)
        let p = this.props.characters.find(character => character.id === this.state.characterId)       
        console.log(p)
        return p
    }

 
levelUpCharacter =  () => {
    console.log(this.getCurrentCharacter)


    console.log('hi')
             var x  = this.getCurrentCharacter()
                if(x){
                x.AC = x.AC + 1    
            console.log(x)
            this.setState({character1: x})
            }

     }
    




    render() {
        //  console.log (this.hello())
        //  console.log(this.two())
        
    if(this.state.diceRoll == 20 && this.state.pooledXP >= 5 && this.state.isVisible === false){
         this.setState({isVisible: true})
    }
    console.log
    
        return (
        


            <div>
            {this.state.isVisible && <button className= "btn btn-danger"  onClick={ () => this.props.updateLevel(3)}> Level Up </button>} 
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


