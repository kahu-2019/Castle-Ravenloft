import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

class CharacterOrder extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.choosePowersLink = this.choosePowersLink.bind(this)
  }



  choosePowersLink() {
    var charOrder = this.props.characterOrder
    if (charOrder && charOrder.length > 0) {
      return '/powers/' + this.props.characterOrder[0].id
    } else { return '/char-select' }
  }

  render() {
    return (
      <Fragment>
        <div className="col orderStyle">
          <p>Order:</p>
        </div>
        <div className="col">
          <ul className="list-inline">
            {this.props.characterOrder.map((character, i) => {
              return (
                <li className="list-inline-item orderList" key={i}>{character.name}</li>
              )
            })}
          </ul>
        </div>
        <div className="col">
          <Link className={this.props.characterOrder.length > 0 ? 'choosepowersActive' : 'choosePowersInactive'} to={this.choosePowersLink()}>Choose Powers</Link>
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    characterOrder: state.characterOrder
  }
}


export default connect(mapStateToProps)(CharacterOrder)