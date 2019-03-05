import React from 'react'
import { connect } from "react-redux";
import {scrollTextViewChange} from '../actions'

class ScrollScenarioOne extends React.Component {
    constructor(props){
        super(props)
    this.handleClick = this.handleClick.bind(this)
    }
handleClick(e){
    console.log('click')
    this.props.dispatch(scrollTextViewChange('none'))
}
    render(){
        return(
<div className='textBox'>
<br/>
<br/>
<br/>

<br/>
<h3>Goal: Find the Secret Staircase</h3>
<br/>
<br/>
<h5>You wake up alone in the depths of Castle Ravenloft. Outside, the Sun is setting. You must Find an escape before the Vampire Lord awakens.</h5>
<br/>
<br/>
<img src="./images/seal3.png" className='sealButton' onClick={this.handleClick}/>

</div>

        )
        
    }
}
function mapStateToProps(state){
    return {
    }
  } 


export default connect(mapStateToProps)(ScrollScenarioOne)