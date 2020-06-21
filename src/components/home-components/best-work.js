import React from "react";


class BestWork extends React.Component {
  render() {
    return (
      <div className="best-work-section">
          <h1>SOME OF CALVIN'S BEST WORK</h1>
          <div className="best-work">
              <div className="best-cuts">
          <img data-aos="fade-up" data-aos-duration="700" src={require("../../images/BW1.jpg")} />
          <img data-aos="fade-up" data-aos-duration="1300" src={require("../../images/BW2.jpg")} />
          <img data-aos="fade-up" data-aos-duration="1900" src={require("../../images/BW3.jpg")} />
          </div>
          </div>
      </div>
    );
  }
}


export default BestWork;
