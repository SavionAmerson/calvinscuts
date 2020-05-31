import React from "react";

class Location extends React.Component {
  render() {
    return (
      <div className="location">
        <div className="arch">
          <img src={require("../../images/arch.jpg")} />
        </div>
        <div className="location-info">
          <h1>WHERE IS CALVIN?</h1>
          <h2>
            Calvin is located in St. Louis, MO. Due to the corona virus
            outbreak, this is the only place his services are avaliable as he is
            unable to travel
          </h2>
        </div>
      </div>
    );
  }
}

export default Location;
