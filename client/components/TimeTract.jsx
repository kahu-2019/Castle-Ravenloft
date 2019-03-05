import React, { Component } from "react";

class TimeTract extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sunTrack: 2
    };
  }

  render() {
    return (
      <div className="Time-tract">
        <div className="time-title">
          <h5>
            <strong>TIME TRACT</strong>
          </h5>
        </div>
        <div className="time-containers">
          <div className="contaniner1 timecontainer1">
            <div className="contaniner" id="circle">
              <h5>1</h5>
              {this.state.sunTrack === 1 && (
                <img height="40" src="/images/icons/sun.png" />
              )}

              <div className="time">
                <h6 className="morning">
                  <strong>MORNING</strong>
                </h6>
              </div>
            </div>

            <div className="contaniner" id="circle">
              <h5>2</h5>
              {this.state.sunTrack === 2 && (
                <img height="40" src="/images/icons/sun.png" />
              )}
            </div>
            <div className="contaniner" id="circle">
              <h5>3</h5>
              {this.state.sunTrack === 3 && (
                <img height="40" src="/images/icons/sun.png" />
              )}
            </div>
            <div className="contaniner" id="circle">
              <h5>4</h5>
              {this.state.sunTrack === 4 && (
                <img height="40" src="/images/icons/sun.png" />
              )}
            </div>
            <div className="contaniner" id="circle">
              <h5>5</h5>
              {this.state.sunTrack === 5 && (
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

export default TimeTract;
