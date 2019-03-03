import React, { Component } from 'react'
import Board from './Board'

class App extends Component {
  render() {
    return (
      <div style={{ overflow: 'hidden' }}>
        <Board />
      </div>
    )
  }
}

export default App 
