import React from "react";

class BestWork extends React.Component {
  render() {
    return (
      <div className="best-work-section">
          <h1>SOME OF CALVIN'S BEST WORK</h1>
          <div className="best-work">
              <div className="row-1">
          <img src={require("../../images/BW1.jpg")} />
          <img src={require("../../images/BW2.jpg")} />
          </div>
          <div className="row-2">
          <img src={require("../../images/BW3.jpg")} />
          <img src={require("../../images/BW4.jpg")} />
          </div>
          </div>
      </div>
    );
  }
}

export default BestWork;
