import React, { Component, Fragment } from "react";
import { getRandomEncounter } from "../actions";
import { connect } from "react-redux";

class EncounterTreasure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      encounter: undefined
    };
    this.getEncounter = this.getEncounter.bind(this);
  }

  getEncounter() {
    this.props
      .dispatch(getRandomEncounter())
      .then(randomEncounter => this.setState({ encounter: randomEncounter }));
  }

  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="Encounter">
              <img
                src="./images/card/encounter-card.jpeg"
                onClick={() => this.getEncounter()}
              />
            </div>
            <div className="Treasure">
              <img
                src="./images/card/treasure-card1.jpg"
                onClick={this.onclick}
              />
            </div>
          </div>
        </div>
        <div className="card-columns">
          {this.state.encounter && (
            <div className={"card " + "bg-" + this.state.encounter.name}>
              <div className="container-fluid">
                <div className="card-body">
                  <div className="row">
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
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default connect()(EncounterTreasure);
