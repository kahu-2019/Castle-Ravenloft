import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { getCardsByCharacter, addPowerCards } from '../actions';
import SneakAttack from './default_powers/SneakAttack';

class Powers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            character: {},
            daily: [],
            utility: [],
            atWill: [],
            dailyResult: {},
            utilityResult: {},
            atWillResults: [],
            nextCharacter: false,
            nextCharId: 1,
            playGame: false,
        }
        this.filterCards = this.filterCards.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.nextCharacter = this.nextCharacter.bind(this)
        this.submit = this.submit.bind(this)
        this.formValidation = this.formValidation.bind(this)
    }

    componentDidMount() {
        var id = this.props.match.params.id
        var character = this.props.characters.find(character => character.id == id)
        this.setState({ character })
        this.props.dispatch(getCardsByCharacter(id)).then(powerCards => this.filterCards(powerCards))
    }

    componentWillReceiveProps(nextProps) {
        var reset = true

        var initialState = {
            dailyResult: {},
            utilityResult: {},
            atWillResults: [],
            nextCharacter: false
        }

        if (nextProps.match.params.id != this.props.match.params.id) {
            if (reset) {
                reset = !reset
                this.setState({
                    dailyResult: initialState.dailyResult,
                    utilityResult: initialState.utilityResult,
                    atWillResults: initialState.atWillResults,
                    nextCharacter: initialState.nextCharacter,
                })
            }

            for (let i = 0; i < 4; i++) {
                if (document.getElementById(`inlineCheckbox3${i}`) !== null) document.getElementById(`inlineCheckbox3${i}`).checked = 'checked'
                if (document.getElementById(`inlineRadio1${i}`) !== null) document.getElementById(`inlineRadio1${i}`).checked = 'checked'
                if (document.getElementById(`inlineRadio2${i}`) !== null) document.getElementById(`inlineRadio2${i}`).checked = 'checked'
            }
            //resets form
            document.getElementById("powersForm").reset();


            window.scrollTo(0, 0)

            var id = nextProps.match.params.id

            var character = this.props.characters.find(character => character.id == id)
            this.setState({ character })
            nextProps.dispatch(getCardsByCharacter(id)).then(powerCards => this.filterCards(powerCards))
        }

    }

    filterCards(powerCards) {
        var daily = powerCards.filter(powerCard => {
            if (powerCard.id == 47) {
                this.setState({ dragonsBreath: powerCard })
            }
            return powerCard.type == 'Daily-Power' && powerCard.id != 47
        })

        var utility = powerCards.filter(powerCard => {
            switch (powerCard.id) {
                case 14:
                    this.setState({ sneakAttack: powerCard })
                    break
                case 1:
                    this.setState({ healingWord: powerCard })
                    break
                case 31:
                    this.setState({ feySted: powerCard })
            }
            return powerCard.type == 'utility power' && powerCard.id != 14 && powerCard.id != 1 && powerCard.id != 31
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


    handleChange(event) {
        var powerType = event.target.name

        // doesn't check when they've chosen two
        if (powerType == 'atWillResults' && this.state.atWillResults.length >= 2) {
            event.target.checked = false
        }

        if (powerType == 'atWillResults' && event.target.checked && this.state.atWillResults.length < 2) {
            event.persist()
            this.setState(state => {
                var atWill = JSON.parse(event.target.value)
                var atWillResults = [...state.atWillResults, atWill.atWill];
                return { atWillResults }
            })
        } else if (powerType == 'atWillResults' && !event.target.checked) {
            var atWill = JSON.parse(event.target.value)
            var updatedArr = this.state.atWillResults.filter(power => power.id != atWill.atWill.id)
            this.setState({ atWillResults: updatedArr })
        } else if (powerType != 'atWillResults') {
            this.setState({ [event.target.name]: JSON.parse(event.target.value) });
        }

    }

    onSubmit(e) {
        e.preventDefault()
        var id = this.props.match.params.id

        var daily = this.state.dailyResult
        var utility = this.state.utilityResult
        var atWill = this.state.atWillResults

        var cards = {
            daily,
            utility,
            atWill
        }


        function setDefaultUtility(powerCard) {
            cards = {
                daily,
                utility: [utility, powerCard],
                atWill
            }
            return cards
        }

        function setDefaultDaily(powerCard) {
            cards = {
                daily: [daily, powerCard],
                utility,
                atWill
            }
            return cards
        }

        function alisaThePickyBitch() {
            cards = {
                daily,
                utility,
                atWill
            }
            return cards
        }

        switch (Number(id)) {
            case 4:
                setDefaultUtility(this.state.sneakAttack)
                break
            case 5:
                setDefaultUtility(this.state.healingWord)
                break
            case 3:
                setDefaultUtility(this.state.feySted)
                break
            case 2:
                setDefaultDaily(this.state.dragonsBreath)
                break
            case 1:
                alisaThePickyBitch()
                break
            default:
                return cards
        }

        this.formValidation(id, cards)

    }

    submit(id, cards) {
        this.props.dispatch(addPowerCards(id, cards))
        this.nextCharacter()
    }

    formValidation(id,cards){
        var isValid = {
            atWill: false,
            daily: false,
            utility: false
        }

        if (cards.atWill.length < 2) {
            alert("You must pick 2 At Will powers")
        }  else{isValid.atWill = true}

        if(cards.daily.length){
            var dailyValid = formValidation(cards.daily)
            if(!dailyValid){
                alert("You must pick one daily power")
            }else{
                isValid.daily = true
            }
        } else if(!cards.daily.id){
            alert("You must pick one daily power")
        } else{isValid.daily = true}
        
        if(cards.utility.length){
            var uitilityValid = formValidation(cards.utility)
            if(!uitilityValid){
                alert("You must pick one utility power")
            }else{
                isValid.utility = true
            }
        } else if(!cards.utility.id){
            alert("You must pick one utility power")
        } else{isValid.utility = true}

        function formValidation(arr){
            for(let i of arr){
                if(!i.id){
                    return false
                }
            }
            return true
        }

        if(isValid.atWill && isValid.daily && isValid.utility){
            this.submit(id,cards)
        }
    }

    nextCharacter() {
        var id = this.props.match.params.id
        var pos = this.props.characterOrder.findIndex(character => character.id == id)
        if (pos + 1 < this.props.characterOrder.length) {
            var nextCharId = this.props.characterOrder[pos + 1].id
            this.setState({ nextCharacter: true, nextCharId })
        } else if (pos + 1 == this.props.characterOrder.length) {
            this.setState({ playGame: true, nextCharacter: false })
        }

    }


    render() {
        return (
            <div className="charSelectBg">
            <div className="justify-content-center">
                <h1 className="nameTitle">{this.state.character.name}</h1>
                <h2 className="orderList">{this.state.character.subtitle}</h2>
                <p className="nameTitle"><img className="displayFace" src={`./images/icons/${this.state.character.name}.jpg`}/></p>
            </div>
            {/* default powers */}
                {this.state.sneakAttack ?
                    <SneakAttack sneakAttack={this.state.sneakAttack}/>
                    : this.state.dragonsBreath ?
                        <Fragment>
                            <h3 className="orderList">You get this by default:</h3>
                            <div className="row justify-content-center">
                            <div className="card">               
                                <div className="dailyCard">
                                    <div className='row'>
                                        <h5 className="card-title powerCardTitle">{this.state.dragonsBreath.title}</h5>
                                        <p className="powerCardSubtitle">{this.state.dragonsBreath.subtitle}</p>
                                        <div className="PowerCardInst">
                                        <p>{this.state.dragonsBreath.instruction_1}</p>
                                        <p>{this.state.dragonsBreath.instruction_2}</p>
                                        </div>
                                    </div>
                                    {this.state.dragonsBreath.damage &&
                                        <div className="powerCardNumberBox2">
                                            <div className='row'>
                                                <div className='col attribs-title card-text pcb'>Attack</div>
                                                <div className='col attribs-title card-text pcb'>Damage</div>
                                            </div>
                                            <div className='row'>
                                                <div className='col attribs card-text pcb'>+ {this.state.dragonsBreath.attack}</div>
                                                <div className='col attribs card-text pcb'>{this.state.dragonsBreath.damage}</div>
                                            </div>
                                            {this.state.dragonsBreath.miss &&
                                                        <Fragment>
                                                            <div className="">Miss: {this.state.dragonsBreath.miss} Damage</div>
                                                        </Fragment>
                                                    }
                                        </div>
                                    }
                                    <p><small className="powerCardUse2">CAN ONLY USE ONCE</small></p>
                                </div>                
                            </div>
                            </div>
                        </Fragment>
                        : this.state.healingWord ?
                            <Fragment>
                                <h3 className="orderList">You get this by default:</h3>
                                <div className="row justify-content-center">
                                <div className="card">
                                    <div className="utilityCard">
                                        <div className='row'>
                                            <h5 className="card-title powerCardTitle">{this.state.healingWord.title}</h5>
                                            <p className="powerCardSubtitle"><b>{this.state.healingWord.subtitle}</b></p>
                                            <div className="PowerCardInst">
                                            <p>{this.state.healingWord.instruction_1}</p>
                                            <p>{this.state.healingWord.instruction_2}</p>
                                            </div>
                                        </div>
                                        <p><small className="powerCardUse">YOU MAY ONLY USE THIS POWER ONCE</small></p>
                                    </div>
                                </div>
                                </div>
                            </Fragment>
                            : this.state.feySted ?
                                <Fragment>
                                    <h3 className="orderList">You get this Power by default:</h3>
                                    <div className="row justify-content-center">
                                    <div className="card">
                                        <div className="utilityCard">
                                            <div className='row'>
                                                <h5 className="card-title powerCardTitle">{this.state.feySted.title}</h5>
                                                <p className="powerCardSubtitle"><b>{this.state.feySted.subtitle}</b></p>
                                                <div className="PowerCardInst">
                                                <p>{this.state.feySted.instruction_1}</p>
                                                <p>{this.state.feySted.instruction_2}</p>
                                                </div>
                                            </div>
                                            <p><small className="powerCardUse">YOU MAY ONLY USE THIS POWER ONCE</small></p>
                                        </div>
                                    </div>
                                    </div>
                                </Fragment>
                                : ''}
                <form onSubmit={this.onSubmit} action={`/powers/${this.state.nextCharId}`} id='powersForm'>
                    <div className="form-group">
                    <br/><br/>
                        <h2 className='power-titles orderList'>Select One Daily Power:</h2>
                        <div className="row justify-content-center">
                            {this.state.daily.map((daily, i) => {
                                return (
                                    <Fragment key={i}>
                                                <label className="form-check-label">
                                                    <input className="form-check-input" type="radio" id={`inlineRadio1${i}`} value={JSON.stringify(daily)} name='dailyResult' onChange={this.handleChange} />

                                                    <div className="card">
                                                        
                                                            <div className="dailyCard">
                                                                <div className='row'>
                                                                    <h5 className="card-title powerCardTitle">{daily.title}</h5>
                                                                    <p className="powerCardSubtitle">{daily.subtitle}</p>
                                                                    <div className="PowerCardInst">
                                                                    <p>{daily.instruction_1}</p>
                                                                    <p>{daily.instruction_2}</p>
                                                                    </div>
                                                                </div>
                                                                {daily.damage &&
                                                                    <div className="powerCardNumberBox2">
                                                                        <div className='row'>
                                                                            <div className='col attribs-title card-text pcb'>Attack</div>
                                                                            <div className='col attribs-title card-text pcb'>Damage</div>
                                                                        </div>
                                                                        <div className='row'>
                                                                            <div className='col attribs card-text pcb'>+ {daily.attack}</div>
                                                                            <div className='col attribs card-text pcb'>{daily.damage}</div>
                                                                        </div>
                                                                        {daily.miss &&
                                                                                    <Fragment>
                                                                                        <div className="">Miss: {daily.miss} Damage</div>
                                                                                    </Fragment>
                                                                                }
                                                                    </div>
                                                                }
                                                                <p><small className="powerCardUse2">CAN ONLY USE ONCE</small></p>
                                                            </div>

                                                        
                                                    </div>
                                                </label>
                                    </Fragment>
                                )
                            })}
                        </div>
                    </div>
                    <div className="form-group">
                    <br/><br/>
                        <h2 className='power-titles orderList'>Select One Utility Power:</h2>
                        <div className="row justify-content-center">
                            {this.state.utility.map((utility, i) => {
                                return (
                                    <Fragment key={i}>
                                                <label className="form-check-label">
                                                    <input className="form-check-input" type="radio" id={`inlineRadio2${i}`} value={JSON.stringify(utility)} name='utilityResult' onChange={this.handleChange} />
                                                    <div className="card">
                                                            <div className="utilityCard">
                                                                <div className='row'>
                                                                    <h5 className="card-title powerCardTitle">{utility.title}</h5>
                                                                    <p className="powerCardSubtitle"><b>{utility.subtitle}</b></p>
                                                                    <div className="PowerCardInst">
                                                                    <p>{utility.instruction_1}</p>
                                                                    <p>{utility.instruction_2}</p>
                                                                    </div>
                                                                </div>
                                                                <p><small className="powerCardUse">YOU MAY ONLY USE THIS POWER ONCE</small></p>
                                                            </div>
                                                    </div>
                                                </label>
                                    </Fragment>
                                )
                            })}
                        </div>
                    </div>
                    <div className="form-group">
                    <br/><br/>
                        <h2 className='power-titles orderList'>Select Two At Will Powers:</h2>
                        <div className="row justify-content-center">
                            {this.state.atWill.map((atWill, i) => {
                                return (
                                    <Fragment key={i}>
                                            <label className="form-check-label">
                                                <input className="form-check-input" type="checkbox" id={`inlineCheckbox3${i}`} value={JSON.stringify({ atWill })} name='atWillResults' onChange={this.handleChange} />

                                                <div className="card">
                                                    
                                                        <div className="atWillCard">
                                                            <div className='row'>
                                                                <h5 className="card-title powerCardTitle">{atWill.title}</h5>
                                                                <p className="powerCardSubtitle">{atWill.subtitle}</p>
                                                                <div className="PowerCardInst">
                                                                    <p>{atWill.instruction_1}</p>
                                                                    <p>{atWill.instruction_2}</p>
                                                                </div>
                                                            </div>
                                                            {atWill.damage &&
                                                                <div className="powerCardNumberBox">
                                                                    <div className='row'>
                                                                        <div className='col attribs-title card-text pcb'>Attack</div>
                                                                        <div className='col attribs-title card-textpcb'>Damage</div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col attribs card-text pcb'>+ {atWill.attack}</div>
                                                                        <div className='col attribs card-text pcb'>{atWill.damage}</div>
                                                                    </div>
                                                                </div>
                                                            }
                                                            <p><small className="powerCardUse"></small></p>
                                                        </div>

                                                   
                                                </div>
                                            </label>
                                </Fragment>
                                )
                            })}
                        </div>
                    </div>
                    <div className='row justify-content-center'>

                    {this.state.playGame?<p></p>:<p><button type="submit" className="btn submitPower orderList choosepowersActive buttonStyles">Submit</button></p>}

                        {this.state.nextCharacter &&

                                <Link to={`/powers/${this.state.nextCharId}`} className="btn submitPower orderList choosepowersActive buttonStyles">Next character</Link>

                        }
                        {this.state.playGame &&

                                <Fragment><Link to='/board' className="submitPower choosepowersActive">Enter Castle Ravenloft</Link><br/><br/></Fragment>

                        }
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        characters: state.characters,
        powerCards: state.powerCards,
        characterOrder: state.characterOrder
    }
}

export default connect(mapStateToProps)(Powers)