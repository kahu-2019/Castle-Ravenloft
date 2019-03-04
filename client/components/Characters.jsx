import React, { Component,Fragment } from 'react'
import { connect } from "react-redux";
import { getAllCharacters } from '../actions';


class Characters extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }


    componentDidMount(){
        this.props.dispatch(getAllCharacters())
    }
  render() {
      
    return (
      <Fragment>
        <div className="card-columns">
        {this.props.characters.map((character,i) => {
            return(
                <div className={'card ' + 'bg-' + (character.name)} key={i}>
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
                                <div className="col attribs card-text">{character.SurgeValue}</div>
                        </div>


                        <div className="row">
                            <p className="card-text card-text">{character.description}</p>
                        </div>
                    </div>                
                </div>

                </div>
            )
        })}
        <p></p>
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