import React, { Component, Fragment } from 'react'

export default class DragonsBreath extends Component {
  render() {
    return (
        <Fragment>
            <h3 className="orderList">You get this by default:</h3>
            <div className="row justify-content-center">
                <div className="card">               
                    <div className="dailyCard">
                        <div className='row'>
                            <h5 className="card-title powerCardTitle">{this.props.dragonsBreath.title}</h5>
                            <p className="powerCardSubtitle">{this.props.dragonsBreath.subtitle}</p>
                            <div className="PowerCardInst">
                            <p>{this.props.dragonsBreath.instruction_1}</p>
                            <p>{this.props.dragonsBreath.instruction_2}</p>
                            </div>
                        </div>
                        {this.props.dragonsBreath.damage &&
                            <div className="powerCardNumberBox2">
                                <div className='row'>
                                    <div className='col attribs-title card-text pcb'>Attack</div>
                                    <div className='col attribs-title card-text pcb'>Damage</div>
                                </div>
                                <div className='row'>
                                    <div className='col attribs card-text pcb'>+ {this.props.dragonsBreath.attack}</div>
                                    <div className='col attribs card-text pcb'>{this.props.dragonsBreath.damage}</div>
                                </div>
                                {this.props.dragonsBreath.miss &&
                                            <Fragment>
                                                <div className="">Miss: {this.props.dragonsBreath.miss} Damage</div>
                                            </Fragment>
                                        }
                            </div>
                        }
                        <p><small className="powerCardUse2">CAN ONLY USE ONCE</small></p>
                    </div>                
                </div>
            </div>
        </Fragment>
    )
  }
}
