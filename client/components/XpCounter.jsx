import React, { Component } from 'react'

export class XpCounter extends Component {
    constructor(props){
        super(props)

        this.state={
            monsterXP:7,
            pooledXP:0,
            hello:6
            
        }
    }

poolXp = () => {
   
    return this.state.pooledXP + this.state.monsterXP + this.state.hello
    
}

  render() {
      console.log(this.poolXp())
    return (
      <div>
        <button className= "btn btn-danger  " onClick={ this.poolXp }>hello</button>
      </div>
    )
  }
}


export default XpCounter
