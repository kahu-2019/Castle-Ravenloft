import React, { Component,Fragment } from 'react'
import { connect } from "react-redux";
import { getCardsByCharacter } from '../actions';

class Powers extends Component {
    constructor(props){
        super(props)
        this.state = {
            daily:[],
            utility:[],
            atWill:[]
        }
        this.filterCards = this.filterCards.bind(this)
    }

    componentDidMount(){
        var id = this.props.match.params.id
        this.props.dispatch(getCardsByCharacter(id)).then(powerCards => this.filterCards(powerCards))
    }

    filterCards(powerCards){
        var daily = powerCards.filter(powerCard => {
            return powerCard.type == 'Daily-Power'
        })

        var utility = powerCards.filter(powerCard => {
            return powerCard.type == 'utility power'
        })

        var atWill = powerCards.filter(powerCard => {
            return powerCard.type == 'At-Will-Power'
        })

        this.setState({
            daily,
            utility,
            atWill
        })
    }


  render() {
    return (
      <Fragment>
        <form>
            <div class="form-group">
                    <h2 className='power-titles'>Daily</h2>
                <div className="row">
                    {this.state.daily.map((daily,i) => {
                        return(
                            <Fragment>
                            <div className="col" key={i}>
                                <div class="form-check form-check-inline">
                                    <label class="form-check-label">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id={`inlineRadio1${i}`} value={`option${i}`} name='daily'/>

                                            <div class="card">
                                                <div className='container-fluid'>
                                                    <div class="card-body">
                                                    <div className='row'>
                                                        <h5 class="card-title">{daily.title}</h5>
                                                        <p className="card-subtitle mb-2 text-muted card-text"><b>{daily.subtitle}</b></p>
                                                        <p><b>{daily.instruction_1}</b> {daily.instruction_2}</p>
                                                    </div>
                                                    {daily.damage && 
                                                        <Fragment>
                                                        <div className='row'>
                                                            <div className='col attribs-title card-text'>Attack</div>
                                                            <div className='col attribs-title card-text'>Damage</div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col attribs card-text'>{daily.attack}</div>
                                                            <div className='col attribs card-text'>{daily.damage}</div>
                                                        </div>
                                                        </Fragment>
                                                    }
                                                    <p><small class="text-muted">FILP THIS CARD AFTER USE</small></p>
                                                </div>
    
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            </Fragment>
                        )
                    })}
                </div>
            </div>
            <div class="form-group">
                    <h2 className='power-titles'>Utility</h2>
                <div className="row">
                    {this.state.utility.map((utility,i) => {
                        return(
                            <Fragment>
                            <div className="col" key={i}>
                                <div class="form-check form-check-inline">
                                    <label class="form-check-label">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id={`inlineRadio2${i}`} value={`option${i}`} name='utility'/>

                                            <div class="card">
                                                <div className='container-fluid'>
                                                    <div class="card-body">
                                                    <div className='row'>
                                                        <h5 class="card-title">{utility.title}</h5>
                                                        <p className="card-subtitle mb-2 text-muted card-text"><b>{utility.subtitle}</b></p>
                                                        <p><b>{utility.instruction_1}</b> {utility.instruction_2}</p>
                                                    </div>
                                                    <p><small class="text-muted">FILP THIS CARD OVER AFTER YOU USE THE POWER</small></p>
                                                </div>
    
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            </Fragment>
                        )
                    })}
                </div>
            </div>
            <div class="form-group">
                    <h2 className='power-titles'>At Will</h2>
                <div className="row">
                    {this.state.atWill.map((atWill,i) => {
                        return(
                            <Fragment>
                            <div className="col" key={i}>
                                <div class="form-check form-check-inline">
                                    <label class="form-check-label">
                                        <input class="form-check-input" type="checkbox" id={`inlineCheckbox3${i}`} value={`option${i}`}/>

                                            <div class="card">
                                                <div className='container-fluid'>
                                                    <div class="card-body">
                                                    <div className='row'>
                                                        <h5 class="card-title">{atWill.title}</h5>
                                                        <p className="card-subtitle mb-2 text-muted card-text"><b>{atWill.subtitle}</b></p>
                                                        <p><b>{atWill.instruction_1}</b> {atWill.instruction_2}</p>
                                                    </div>
                                                    {atWill.damage && 
                                                        <Fragment>
                                                        <div className='row'>
                                                            <div className='col attribs-title card-text'>Attack</div>
                                                            <div className='col attribs-title card-text'>Damage</div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col attribs card-text'>{atWill.attack}</div>
                                                            <div className='col attribs card-text'>{atWill.damage}</div>
                                                        </div>
                                                        </Fragment>
                                                    }
                                                    <p><small class="text-muted">FILP THIS CARD AFTER USE</small></p>
                                                </div>
    
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            </Fragment>
                        )
                    })}
                </div>
            </div>
        </form>
      </Fragment>
    )
  }
}

function mapStateToProps(state){
    return {
        characters: state.characters,
        powerCards: state.powerCards
    }
}

export default connect(mapStateToProps)(Powers)