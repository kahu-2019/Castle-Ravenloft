import React, { Component } from 'react'
import Characters from './Characters';
import SurgeTokens from './SurgeTokens'
import XpCounter from './XpCounter'

class App extends Component {
  render() {
    return (
      <div>
        <Characters />
        <SurgeTokens />
        <XpCounter />
      </div>
    )
  }
}

export default App 
