import React from "react";

class Calvin extends React.Component {
  render() {
    return (
      <div className="calvin">
            <div class="container">

                <div className="intro">
                  <h1>NEED A HAIRCUT BUT CAN'T GET ONE BECAUSE OF THE CORONAVIRUS?</h1>
                  <h2>No problem! This guy right here, Calvin, Will come to your house and cut your hair for you!</h2>
              </div>

              <div class="calvin-photo col-md-6 text-center">
                <img src={require("../../images/Calvin.jpg")} class="img-fluid"/>
              </div>
          </div>
          


          <img src={require("../../images/wave.png")} className="wave"/>
      </div>
    );
  }
}

export default Calvin;
