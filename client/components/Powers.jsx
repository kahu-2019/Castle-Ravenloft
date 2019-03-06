import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { getCardsByCharacter, addPowerCards } from '../actions';

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

        this.submit(id, cards)

    }

    submit(id, cards) {
        if (cards.atWill.length < 2) {
            alert("You must pick 2 At Will powers")
        } else {
            this.props.dispatch(addPowerCards(id, cards))
            this.nextCharacter()
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
                <h1>{this.state.character.name}</h1>
                <h2>{this.state.character.subtitle}</h2>
                {this.state.sneakAttack ?
                    <Fragment>
                        <h3 className="orderList">You get this by default:</h3>
                        <div className="row justify-content-center">
                        <div className="card">
                            <div className="utilityCard powerCardDefault">
                                <div className='row'>
                                    <h5 className="card-title powerCardTitle">{this.state.sneakAttack.title}</h5>
                                    <p className="powerCardSubtitle"><b>{this.state.sneakAttack.subtitle}</b></p>
                                    <div className="PowerCardInst">
                                    <p>{this.state.sneakAttack.instruction_1}</p>
                                    <p>{this.state.sneakAttack.instruction_2}</p>
                                    </div>
                                </div>
                                <p><small className="powerCardUse">YOU MAY ONLY USE THIS POWER ONCE</small></p>
                            </div>
                            </div>
                            </div>
                    </Fragment>
                    : this.state.dragonsBreath ?
                        <Fragment>
                            <h3>You get this by default</h3>
                            <div className="card">
                                <div className='container-fluid'>
                                    <div className="card-body">
                                        <div className='row'>
                                            <h5 className="card-title">{this.state.dragonsBreath.title}</h5>
                                            <p className="card-subtitle mb-2 text-muted card-text"><b>{this.state.dragonsBreath.subtitle}</b></p>
                                            <p><b>{this.state.dragonsBreath.instruction_1}</b> {this.state.dragonsBreath.instruction_2}</p>
                                        </div>
                                        {this.state.dragonsBreath.damage &&
                                            <Fragment>
                                                <div className='row'>
                                                    <div className='col attribs-title card-text'>Attack</div>
                                                    <div className='col attribs-title card-text'>Damage</div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col attribs card-text'>+ {this.state.dragonsBreath.attack}</div>
                                                    <div className='col attribs card-text'>

                                                        {this.state.dragonsBreath.damage}
                                                        {this.state.dragonsBreath.miss &&
                                                            <Fragment>

                                                                <p>Miss: {this.state.dragonsBreath.miss} Damage</p>
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
                        </Fragment>
                        : this.state.healingWord ?
                            <Fragment>
                                <h3>You get this by default</h3>
                                <div className="card">
                                    <div className='container-fluid'>
                                        <div className="card-body">
                                            <div className='row'>
                                                <h5 className="card-title">{this.state.healingWord.title}</h5>
                                                <p className="card-subtitle mb-2 text-muted card-text"><b>{this.state.healingWord.subtitle}</b></p>
                                                <p><b>{this.state.healingWord.instruction_1}</b> {this.state.healingWord.instruction_2}</p>
                                            </div>
                                            <p><small className="text-muted">FILP THIS CARD OVER AFTER YOU USE THE POWER</small></p>
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                            : this.state.feySted ?
                                <Fragment>
                                    <h3>You get this by default</h3>
                                    <div className="card">
                                        <div className='container-fluid'>
                                            <div className="card-body">
                                                <div className='row'>
                                                    <h5 className="card-title">{this.state.feySted.title}</h5>
                                                    <p className="card-subtitle mb-2 text-muted card-text"><b>{this.state.feySted.subtitle}</b></p>
                                                    <p><b>{this.state.feySted.instruction_1}</b> {this.state.feySted.instruction_2}</p>
                                                </div>
                                                <p><small className="text-muted">FILP THIS CARD OVER AFTER YOU USE THE POWER</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </Fragment>
                                : ''}
                <form onSubmit={this.onSubmit} action={`/powers/${this.state.nextCharId}`} id='powersForm'>
                    <div className="form-group">
                        <h2 className='power-titles orderList'>Daily Powers:</h2>
                        <div className="row">
                            {this.state.daily.map((daily, i) => {
                                return (
                                    <Fragment key={i}>
                                        <div className="col">
                                            <div className="form-check form-check-inline">
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
                                            </div>
                                        </div>
                                    </Fragment>
                                )
                            })}
                        </div>
                    </div>
                    <div className="form-group">
                        <h2 className='power-titles orderList'>Utility Powers:</h2>
                        <div className="row">
                            {this.state.utility.map((utility, i) => {
                                return (
                                    <Fragment key={i}>
                                        <div className="col">
                                            <div className="form-check form-check-inline">
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
                                            </div>
                                        </div>
                                    </Fragment>
                                )
                            })}
                        </div>
                    </div>
                    <div className="form-group">
                        <h2 className='power-titles orderList'>At Will Powers:</h2>
                        <div className="row">
                            {this.state.atWill.map((atWill, i) => {
                                return (
                                    <Fragment key={i}>
                                    <div className="col">
                                        <div className="form-check form-check-inline">
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

function mapStateToProps(state) {
    return {
        characters: state.characters,
        powerCards: state.powerCards,
        characterOrder: state.characterOrder
    }
}

export default connect(mapStateToProps)(Powers)