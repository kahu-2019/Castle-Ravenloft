import React, { Component,Fragment } from 'react'
import { connect } from "react-redux";

class CharacterOrder extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }



  render() {
      
    return (
      <Fragment>
          <div className="col">
            <h2>Order:</h2>
          </div>
          <div className="col">
            <ul className="list-inline">
                {this.props.characterOrder.map((character,i) => {
                    return(
                        <li className="list-inline-item" key={i}>{character.name}</li>
                    )
                })}
            </ul>
          </div>
          <div className="col">
            <button>Choose Powers</button>
          </div>
      </Fragment>
    )
  }
}

function mapStateToProps(state){
    return {
        characterOrder: state.characterOrder
    }
  } 


export default connect(mapStateToProps)(CharacterOrder)