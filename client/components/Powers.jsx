import React, { Component,Fragment } from 'react'
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import { getCardsByCharacter, addPowerCards } from '../actions';

class Powers extends Component {
    constructor(props){
        super(props)
        this.state = {
            character:{},
            daily:[],
            utility:[],
            atWill:[],
            dailyResult:{},
            utilityResult:{},
            atWillResults:[],
            nextCharacter:false,
            nextCharId:1,
            playGame:false,
        }
        this.filterCards = this.filterCards.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.nextCharacter = this.nextCharacter.bind(this)
    }

    componentDidMount(){
        var id = this.props.match.params.id
        var character = this.props.characters.find(character => character.id == id)
        this.setState({character})
        this.props.dispatch(getCardsByCharacter(id)).then(powerCards =>  this.filterCards(powerCards))
    }

    componentWillReceiveProps(nextProps) {
        var reset = true

        var initialState = {
            dailyResult:{},
            utilityResult:{},
            atWillResults:[],
            nextCharacter:false
        }

        if(nextProps.match.params.id != this.props.match.params.id){
            if(reset){
                reset = !reset
                this.setState({
                    dailyResult:initialState.dailyResult,
                    utilityResult:initialState.utilityResult,
                    atWillResults:initialState.atWillResults,
                    nextCharacter:initialState.nextCharacter,
                })
            }

            for(let i = 0; i < 4; i++){
                if(document.getElementById(`inlineCheckbox3${i}`) !== null) document.getElementById(`inlineCheckbox3${i}`).checked = 'checked'
                if(document.getElementById(`inlineRadio1${i}`) !== null) document.getElementById(`inlineRadio1${i}`).checked = 'checked'
                if(document.getElementById(`inlineRadio2${i}`) !== null) document.getElementById(`inlineRadio2${i}`).checked = 'checked'
            }
            //resets form
            document.getElementById("powersForm").reset();
            
            // scrolls to the top
            var elmnt = document.getElementById("myDIV");
            elmnt.scrollLeft = 0;
            elmnt.scrollTop = 0;
            
            var id = nextProps.match.params.id

            var character = this.props.characters.find(character => character.id == id)
            this.setState({character})
            nextProps.dispatch(getCardsByCharacter(id)).then(powerCards => this.filterCards(powerCards))
    }

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

    
    handleChange(event){
        var powerType = event.target.name

        // doesn't check when they've chosen two
        if(powerType == 'atWillResults' && this.state.atWillResults.length >= 2){
            event.target.checked = false
        }

        if(powerType == 'atWillResults' && event.target.checked && this.state.atWillResults.length < 2){
            event.persist()
            this.setState(state => {
                var atWill = JSON.parse(event.target.value)
                var atWillResults = [...state.atWillResults, atWill.atWill];
                return {atWillResults}
            })
        } else if(powerType == 'atWillResults' && !event.target.checked){
            var atWill = JSON.parse(event.target.value)
            var updatedArr = this.state.atWillResults.filter(power =>  power.id != atWill.atWill.id)
            this.setState({atWillResults:updatedArr})
        }else if(powerType != 'atWillResults'){
            this.setState({ [event.target.name]: JSON.parse(event.target.value )});
        }

    }

    onSubmit(e){
        e.preventDefault()
        var id = this.props.match.params.id
        var cards = {
            daily:this.state.dailyResult,
            utility: this.state.utilityResult,
            atWill: this.state.atWillResults
        }

        if(cards.atWill.length < 2){
            alert("You must pick 2 At Will powers")
        }else{
            this.props.dispatch(addPowerCards(id,cards))
            this.nextCharacter()
        }

    }

    nextCharacter(){
        var id = this.props.match.params.id
        var pos = this.props.characterOrder.findIndex(character => character.id == id)
        if(pos + 1 < this.props.characterOrder.length){
            var nextCharId = this.props.characterOrder[pos+1].id
            this.setState({nextCharacter:true,nextCharId})
        }else if(pos + 1 == this.props.characterOrder.length){
            this.setState({playGame:true,nextCharacter:false})
        }
        
    }


  render() {
    return (
      <div id='myDIV'>
          <h1>{this.state.character.name}</h1>
          <h2>{this.state.character.subtitle}</h2>
        <form onSubmit={this.onSubmit} action={`/powers/${this.state.nextCharId}`} id='powersForm'>
            <div className="form-group">
                    <h2 className='power-titles'>Daily</h2>
                <div className="row">
                    {this.state.daily.map((daily,i) => {
                        return(
                            <Fragment key={i}>
                            <div className="col">
                                <div className="form-check form-check-inline">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="radio" id={`inlineRadio1${i}`} value={JSON.stringify(daily)} name='dailyResult' onChange={this.handleChange}/>

                                            <div className="card">
                                                <div className='container-fluid'>
                                                    <div className="card-body">
                                                    <div className='row'>
                                                        <h5 className="card-title">{daily.title}</h5>
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
                                                            <div className='col attribs card-text'>+ {daily.attack}</div>
                                                            <div className='col attribs card-text'>
                                                            
                                                                {daily.damage}
                                                                {daily.miss && 
                                                                <Fragment>
                                                                
                                                                <p>Miss: {daily.miss} Damage</p>
                                                                </Fragment>
                                                                }
                                                            
                                                            </div>
                                                        </div>
                                                        </Fragment>
                                                    }
                                                    <p><small className="text-muted">FILP THIS CARD AFTER USE</small></p>
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
            <div className="form-group">
                    <h2 className='power-titles'>Utility</h2>
                <div className="row">
                    {this.state.utility.map((utility,i) => {
                        return(
                            <Fragment key={i}>
                            <div className="col">
                                <div className="form-check form-check-inline">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="radio" id={`inlineRadio2${i}`} value={JSON.stringify(utility)} name='utilityResult' onChange={this.handleChange}/>

                                            <div className="card">
                                                <div className='container-fluid'>
                                                    <div className="card-body">
                                                    <div className='row'>
                                                        <h5 className="card-title">{utility.title}</h5>
                                                        <p className="card-subtitle mb-2 text-muted card-text"><b>{utility.subtitle}</b></p>
                                                        <p><b>{utility.instruction_1}</b> {utility.instruction_2}</p>
                                                    </div>
                                                    <p><small className="text-muted">FILP THIS CARD OVER AFTER YOU USE THE POWER</small></p>
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
            <div className="form-group">
                    <h2 className='power-titles'>At Will</h2>
                <div className="row">
                    {this.state.atWill.map((atWill,i) => {
                        return(
                            <Fragment key={i}>
                            <div className="col">
                                <div className="form-check form-check-inline">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" id={`inlineCheckbox3${i}`} value={JSON.stringify({atWill})} name='atWillResults' onChange={this.handleChange}/>

                                            <div className="card">
                                                <div className='container-fluid'>
                                                    <div className="card-body">
                                                    <div className='row'>
                                                        <h5 className="card-title">{atWill.title}</h5>
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
                                                            <div className='col attribs card-text'>+ {atWill.attack}</div>
                                                            <div className='col attribs card-text'>{atWill.damage}</div>
                                                        </div>
                                                        </Fragment>
                                                    }
                                                    <p><small className="text-muted">FILP THIS CARD AFTER USE</small></p>
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
            <div className='row'>
                    <div className='col'>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    {this.state.nextCharacter && 
                        <div className='col'>
                            <Link to={`/powers/${this.state.nextCharId}`} className="btn btn-secondary">Next character</Link>
                        </div>
                    }
                    {this.state.playGame &&
                        <div className='col'>
                            <Link to='/board' className="btn btn-secondary">Play Game!</Link>
                        </div>
                    }
            </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        characters: state.characters,
        powerCards: state.powerCards,
        characterOrder: state.characterOrder
    }
}

export default connect(mapStateToProps)(Powers)