import React, { Component,Fragment } from 'react'
import { getAllCharacters } from '../actions';
import { connect } from 'react-redux'

 class SurgeTokens extends Component {

    constructor(props){
        super(props)
        this.state={
            surgeTokens:2
        }
        
    }

    // componentWillMount = () => {
    //     this.props.dispatch (getAllCharacters())
           
    // }

     
       buttonClicked = () => {
        this.setState({surgeTokens: this.state.surgeTokens - 1}, () => {
            // this.state.characters.map(character,i) => () {

            // }
        })
        this.state.characters
        

       }
    
    // useToken = () => {

    // }


  render() {

    console.log(this.props.characters   )
    if(this.state.surgeTokens == 2){
        return(
        <div>
        <button type="button" class="btn btn-primary" onClick={ this.buttonClicked } >Surge Token</button>
        <button type="button" class="btn btn-primary" onClick={ this.buttonClicked }>Surge Token</button>
        </div>)
        
       
   }
   else if (this.state.surgeTokens == 1) {
       return(
       <button type="button" class="btn btn-primary" onClick={ this.buttonClicked }>Surge Token</button>
       )
       
   }

   else {
       return(
        ''
       )
   }

   

}

}

function mapStateToProps(state) {
    return {characters: state.characters}

}




export default connect(mapStateToProps)(SurgeTokens);
  