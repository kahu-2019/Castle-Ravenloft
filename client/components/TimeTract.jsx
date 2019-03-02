import React, { Component } from "react";

class TimeTract extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Time-tract">
        <h2>
          <strong>TIME TRACT</strong>
        </h2>

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
              <span>
                Place the Sun totken on this circle at the start of the
                adventure
              </span>
              <div className="time">
                <h6>
                  <strong>MORNING</strong>
                </h6>
              </div>
            </div>

            <div className="contaniner" id="circle">
              <h3>2</h3>
            </div>
            <div className="contaniner" id="circle">
              <h3>3</h3>
            </div>
            <div className="contaniner" id="circle">
              <h3>4</h3>
            </div>
            <div className="contaniner" id="circle">
              <h3>5</h3>
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
