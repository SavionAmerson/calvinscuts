import React from "react";

class Calvin extends React.Component {
  render() {
    return (
      <div className="calvin">
          <div className="intro">
              <h1>
              NEED A HAIRCUT BUT CAN'T GET ONE DUE TO COVID-19?
              </h1>
              <h2>
              No problem! This guy right here, Calvin, Will come to your house and cut your hair for you!
              </h2>
          </div>
          <div className="calvin-photo">
          <img src={require("../../images/Calvin.jpg")} />
          </div>
      </div>
    );
  }
}

export default Calvin;
