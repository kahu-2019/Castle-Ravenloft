import React from 'react'
import {increaseSunTracker} from '../actions/index'
import { connect } from "react-redux";

function SunTrackerTemp(props){
    dispatch(increaseSunTracker(5))
    return(
<p>suntrackertemp</p>
    )
}

function mapStatetoProps(state)
return{
    characters: state.characters
}
export default connect()(SunTrackerTemp)