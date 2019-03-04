import React, { Component } from 'react'
import Characters from './Characters';
import SurgeTokens from './SurgeTokens'
import ScrollViewer from './ScrollViewer'
import Board from './Board'


class App extends Component {

  render() {
    return (
      <div>
        <Characters/>
        <ScrollViewer/>
      </div>
      // <div style={{ overflow: 'hidden' }}>
      //   <Board />
      // </div>
    )
  }
}

export default App 
