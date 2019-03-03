import React, { Component } from "react";
import {connect} from 'react-redux'

class TimeTract extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.characters)
    return (
      <div className="Time-tract">
        <div className="title">
          <h2>
            <strong>TIME TRACKER</strong>
          </h2>
        </div>
        <div className="containers">
          <img
            src="./images/time-track/time-track1.png"
            alt="time-track"
            height="350"
            width="900"
          />
          <div className="contaniner1">
            <div className="contaniner" id="circle">
              <h3>1</h3>
              {this.props.sunTrack === 1 && (
                <img height="40" src="/images/icons/sun.png" />
              )}
              <div className="time">
                <h6>
                  <strong>MORNING</strong>
                </h6>
              </div>
            </div>

            <div className="contaniner" id="circle">
              <h3>2</h3>
              {this.props.sunTrack === 2 && (
                <img height="40" src="/images/icons/sun.png" />
              )}
            </div>
            <div className="contaniner" id="circle">
              <h3>3</h3>
              {this.props.sunTrack === 3 && (
                <img height="40" src="/images/icons/sun.png" />
              )}
            </div>
            <div className="contaniner" id="circle">
              <h3>4</h3>
              {this.props.sunTrack === 4 && (
                <img height="60" src="/images/icons/sun2.png" />
              )}
            </div>
            <div className="contaniner" id="circle">
              <h3>5</h3>
              {this.props.sunTrack === 5 && (
                <img height="40" src="/images/icons/sun.png" />
              )}
              <span>Strahd wakes up!</span>
              <div className="time1">
                <h6>
                  <strong>SUNSET</strong>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
      sunTrack: state.sunTracker
  }
} 

export default connect(mapStateToProps)(TimeTract)