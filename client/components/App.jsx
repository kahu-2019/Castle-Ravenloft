import Board from "./Board";
import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import TimeTract from "./TimeTract";
import EncounterTreasure from "./EncounterTreasure";
import Home2 from "./Home2";
import Home from "./Home";
import Characters from "./Characters";
import Powers from "./Powers";

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div style={{ overflow: 'hidden' }}>
        <div>
=======
      <div style={{ overflow: "hidden" }}>
        <div className="container-fluid">
>>>>>>> ee3a1908634d3df3e8c5815ba726ed50bddf5c00
          <Router>
            <Fragment>
              <Route exact path="/" component={Home2} />
              <Route exact path="/home" component={Home} />
              <Route path="/char-select" component={Characters} />
              <Route path="/powers/:id" component={Powers} />
              <Route path="/timetract" component={TimeTract} />
              <Route path="/encounter-treasure" component={EncounterTreasure} />
              <Route path="/board" component={Board} />
            </Fragment>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;