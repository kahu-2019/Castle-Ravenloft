import React, { Component, Fragment } from "react";
import { getRandomEncounter, getRandomTreasure } from "../actions";
import { connect } from "react-redux";

class EncounterTreasure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      encounter: undefined,
      treasure: undefined
    };
    this.getEncounter = this.getEncounter.bind(this);
    this.getTreasure = this.getTreasure.bind(this);
  }

  getEncounter() {
    this.props
      .dispatch(getRandomEncounter())
      .then(randomEncounter => this.setState({ encounter: randomEncounter }));
  }

  getTreasure() {
    this.props
      .dispatch(getRandomTreasure())
      .then(randomTreasure => this.setState({ treasure: randomTreasure }));
  }

  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="encounter">
              <img
                src="./images/card/encounter-card.jpeg"
                onClick={() => this.getEncounter()}
              />
            </div>
            <div className="treasure">
              <img
                src="./images/card/treasure-card1.jpg"
                onClick={() => this.getTreasure()}
              />
            </div>
          </div>
        </div>
        <div className="row">
          {this.state.encounter && (
            <div className={"card1" + "bg-" + this.state.encounter.name}>
              <div className="card1 w-40">
                <div class="card-body">
                  <h5 className="card-title card-text">
                    {this.state.encounter.name}
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted card-text">
                    {this.state.encounter.flavour}
                  </h6>
                  <p className="card-text card-text">
                    {this.state.encounter.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="row">
          {this.state.treasure && (
            <div className={"card2 " + "bg-" + this.state.treasure.name}>
              <div className="card2 w-40">
                <div className="card-body">
                  <h5 className="card-title card-text">
                    {this.state.treasure.name}
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted card-text">
                    {this.state.treasure.play_imm}
                  </h6>
                  <p className="card-text card-text">
                    {this.state.treasure.action}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default connect()(EncounterTreasure);
