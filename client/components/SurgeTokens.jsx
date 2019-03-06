import React, { Component, Fragment } from 'react'
import { getAllCharacters } from '../actions';
import { connect } from 'react-redux'

class SurgeTokens extends Component {

    constructor(props) {
        super(props)
        this.state = {
            surgeTokens: 2
        }
        this.updateHP = this.updateHP.bind(this)
    }




    updateHP(id) {
        var character = this.props.characters.find(character => character.id == id)

        character.HP = character.SurgeValue
    }

    buttonClicked = () => {
        this.setState({ surgeTokens: this.state.surgeTokens - 1 }, () => {


            this.updateHP(2)
        })


    }

    render() {

        console.log(this.props.characters)
        if (this.state.surgeTokens == 2) {
            return (
                <div className="surgePosition">
                    <button type="button"  className=" surgeToken" onClick={this.buttonClicked} >Surge Token</button>
                    <button type="button" className=" surgeToken" onClick={this.buttonClicked}>Surge Token</button>
                </div>)

            }
    
       
   
   else if (this.state.surgeTokens == 1) {
       return(
           <div className="surgePosition">

               <button type="button" className="surgeToken" onClick={ this.buttonClicked }>Surge Token</button>
           </div>
       )
       
   }

        

        else {
            return (
                ''
            )
        }



    }

}

function mapStateToProps(state) {
    return { characters: state.characters }

}




export default connect(mapStateToProps)(SurgeTokens);
