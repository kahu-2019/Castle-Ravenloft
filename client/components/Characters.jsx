import React, { Component,Fragment } from 'react'
import { connect } from "react-redux";
import { getAllCharacters,addCharacterOrder } from '../actions';
import CharacterOrder from './CharacterOrder';

class Characters extends Component {
    constructor(props){
        super(props)
        this.state={
            characterChosen1:false,
            characterChosen2:false,
            characterChosen3:false,
            characterChosen4:false,
            characterChosen5:false
        }
        this.characterOrder = this.characterOrder.bind(this)
    }


    componentDidMount(){
        this.props.dispatch(getAllCharacters())
    }

    characterOrder(character){
        var id = character.id
        this.props.dispatch(addCharacterOrder(character));
            this.setState({[`characterChosen${id}`]:true})
    }

  render() {
      
    return (
      <Fragment>
        <div className="card-columns">
        {this.props.characters.map((character,i) => {
            var id = character.id
            if(!this.state[`characterChosen${id}`]){
                        return(
                <div className={'card ' + 'bg-' + (character.name)} key={i} onClick={() => this.characterOrder(character)}>
                <div className="container-fluid">
                    <div className="card-body">
                        <div className="row">
                            <h5 className="card-title card-text">{character.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted card-text">{character.subtitle}</h6>
                            <p className="card-text card-text">{character.description}</p>
                        </div>
                            <div className="row">
                                <div className="col attribs-title card-text">AC</div>
                                <div className="col attribs-title card-text">HP</div>
                                <div className="col attribs-title card-text">Speed</div>
                                <div className="col attribs-title card-text">SurgeValue</div>
                            </div>
                            <div className="row">
                                <div className="col attribs card-text">{character.AC}</div>
                                <div className="col attribs card-text">{character.HP}</div>
                                <div className="col attribs card-text">{character.speed}</div>
                                <div className="col attribs card-text">+ {character.SurgeValue}</div>
                        </div>


                        <div className="row">
                            <p className="card-text card-text">{character.description}</p>
                        </div>
                    </div>                
                </div>
                </div>
            )    
            } else {
                return ''
            }

        })}
        </div>
        <div className="row">
            <CharacterOrder />
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps(state){
    return {
        characters: state.characters
    }
  } 
  
  


export default connect(mapStateToProps)(Characters)