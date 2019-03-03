import React, { Component, Fragment } from "react";

class EncounterTreasure extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="Encounter">
              <img src="./images/card/encounter-card.jpeg" />
            </div>
            <div className="Treasure">
              <img src="./images/card/treasure-card1.jpg" />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default EncounterTreasure;
