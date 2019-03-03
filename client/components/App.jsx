import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import TimeTract from "./TimeTract";
import EncounterTreasure from "./EncounterTreasure";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <Route exact path="/" component={Home} />
            <Route path="/encounter-treasure" component={EncounterTreasure} />
            <Route path="/timetract" component={TimeTract} />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
