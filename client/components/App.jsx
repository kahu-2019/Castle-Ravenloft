import React, { Component } from 'react'
import Characters from './Characters';
import SurgeTokens from './SurgeTokens'

class App extends Component {
  render() {
    return (
      <div>
        <Characters />
        <SurgeTokens />
      </div>
    );
  }
}

export default App 
