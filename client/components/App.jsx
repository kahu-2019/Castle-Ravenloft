import React, { Component, Fragment } from 'react'
import Characters from './Characters';
import Home from './Home'
import Powers from './Powers'
import { HashRouter as Router, Route } from 'react-router-dom'
// import TimeTract from "./TimeTract";
import EncounterTreasure from "./EncounterTreasure";


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Router>
          <Fragment>
            <Route exact path='/' component={Home} />
            <Route path='/char-select' component={Characters} />
            <Route path='/powers/:id' component={Powers} />
            {/* <Characters /> */}
            {/* <TimeTract /> */}
            {/* <Home /> */}
            <EncounterTreasure />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
