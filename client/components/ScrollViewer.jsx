import React from 'react'
import { connect } from "react-redux";
import ScrollStrahdAwoken from './ScrollStrahdAwoken'
import {scrollTextViewChange} from '../actions'
import ScrollScenarioOne from './ScrollScenarioOne'

class ScrollViewer extends React.Component {
    constructor(props){
      super(props)
  }
  
  
  componentDidMount(){
      // this.props.dispatch(scrollTextViewChange('none'))
  }
    render() {
      return (
        <React.Fragment>
          {this.props.scrollTextView === 'startScenarioOne' && <ScrollScenarioOne/>}
          {this.props.scrollTextView === 'awoken' && <ScrollStrahdAwoken/>}
        </React.Fragment>

      )
    }
  }

  function mapStateToProps(state){
    return {
  scrollTextView: state.scrollTextView
    }
  } 
  
  
  export default connect(mapStateToProps)(ScrollViewer)