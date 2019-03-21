import React, { Component, Fragment } from 'react'

export default class SneakAttack extends Component {
  render() {
    return (
        <Fragment>
            <h3 className="orderList">You get this by default:</h3>
            <div className="row justify-content-center">
                <div className="card">
                    <div className="utilityCard powerCardDefault">
                        <div className='row'>
                            <h5 className="card-title powerCardTitle">{this.props.sneakAttack.title}</h5>
                            <p className="powerCardSubtitle"><b>{this.props.sneakAttack.subtitle}</b></p>
                            <div className="PowerCardInst">
                            <p>{this.props.sneakAttack.instruction_1}</p>
                            <p>{this.props.sneakAttack.instruction_2}</p>
                            </div>
                        </div>
                        <p><small className="powerCardUse">YOU MAY ONLY USE THIS POWER ONCE</small></p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
  }
}
