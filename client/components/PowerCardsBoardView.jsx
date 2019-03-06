import React from 'react'
import { connect } from "react-redux";
import { getCardsByCharacter, addPowerCards } from '../actions';
class PowerCardsBoardView extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount() {
        this.props.dispatch(getCardsByCharacter(3))
    }
render(){
    console.log(this.props.powerCards)
    //console.log(this.state)
    return(
        <div>power cards</div>
    )
}

}
function mapStateToProps(state){
    return {
    //     powerCards: state.powerCards
    //     cards
    // }
  } 


export default connect(mapStateToProps)(PowerCardsBoardView)

//this.state.characters.cards.atWill[]