import React, { Component } from 'react'
import { connect } from "react-redux";
import { getCardsByCharacter } from '../actions';

class Powers extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        var id = this.props.match.params.id
        this.props.dispatch(getCardsByCharacter(id))
    }


  render() {
    return (
      <div>
        Powers
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        powerCards: state.powerCards
    }
}

export default connect(mapStateToProps)(Powers)