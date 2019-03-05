import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import { getAllCharacters, addCharacterOrder } from '../actions';
import CharacterOrder from './CharacterOrder';

class Characters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            characterChosen1: false,
            characterChosen2: false,
            characterChosen3: false,
            characterChosen4: false,
            characterChosen5: false
        }
        this.characterOrder = this.characterOrder.bind(this)
    }


    componentDidMount() {
        this.props.dispatch(getAllCharacters())
    }

    characterOrder(character) {
        var id = character.id
        this.props.dispatch(addCharacterOrder(character));
        this.setState({ [`characterChosen${id}`]: true })
    }

    render() {

        return (
            <Fragment>
                <div className="card-columns imFont">
                    {this.props.characters.map((character, i) => {
                        var id = character.id
                        if (!this.state[`characterChosen${id}`]) {
                            return (
                                <div className={'card ' + 'bg-' + (character.name)} key={i} onClick={() => this.characterOrder(character)}>
                                    <div className="container-fluid">
                                        <div className="card-body">
                                          
                                                <h5 className="card-title card-text char-card namePosition">{character.name}</h5>
                                                <h6 className="subtitlePosition">{character.subtitle}</h6>
                                                <p className="descriptionPosition">{character.description}</p>
                                           
                                            <div className="row statRow">
                                                <div className="col card-text char-card acPosition">{character.AC}</div>
                                                <div className="col card-text char-card hpPosition">{character.HP}</div>
                                                <div className="col card-text char-card speedPosition">{character.speed}</div>
                                                <div className="col card-text char-card surgePosition">+{character.SurgeValue}</div>
                                            </div>
                                            <div className="abilityPosition">
                                                <p >{character.ability}</p>
                                                <h5>Power:</h5>
                                                <p>You can choose the following Power Cards:<br/>Select one Utility Power<br/>Select two At-Will Powers<br/>Select one Daily Power</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                            return ''
                        }

                    })}
                    <p></p>
                </div>
                <div className="row">
                    <CharacterOrder />
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps)(Characters)