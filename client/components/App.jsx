import Board from './Board'
import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import TimeTract from "./TimeTract";
import EncounterTreasure from "./EncounterTreasure";
import Home2 from "./Home2";
import Characters from "./Characters";
import Powers from "./Powers";
import SurgeTokens from './SurgeTokens';
import XpCounter from './XpCounter';
import LevelUp from './LevelUp';
import DisplayCharactersBoard from './DisplayCharactersBoard';

class App extends Component {

  render() {
    return (
      <div>
        {/* <SurgeTokens /> */}
        {/* <XpCounter /> */}
        {/* <LevelUp /> */}

        <div style={{ overflow: 'hidden' }}>
          <div >
            <Router>
              <Fragment>
                <Route exact path="/" component={Home2} />
                <Route path="/char-select" component={Characters} />
                <Route path="/powers/:id" component={Powers} />
                <Route path="/timetract" component={TimeTract} />
                <Route path="/encounter-treasure" component={EncounterTreasure} />
                <Route path="/board" component={Board} />
                <Route path="/test" component={DisplayCharactersBoard} />
                
              </Fragment>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App