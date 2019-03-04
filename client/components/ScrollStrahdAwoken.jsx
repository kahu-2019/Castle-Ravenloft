import React from 'react'
import { connect } from "react-redux";
import {scrollTextViewChange} from '../actions'

class ScrollStrahdAwoken extends React.Component {
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
<br/>
<br/>


<h1>Strahd has woken.</h1>
<h1>Run for the Exit.</h1>
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


export default connect(mapStateToProps)(ScrollStrahdAwoken)