import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
          <h1>©Calvin 2020</h1>
          <div className="socials">
          <img src={require("../images/fb.png")} />
          <img src={require("../images/tw.png")} />
          <img src={require("../images/ig.png")} />
          {/* <h1>BUILT BY SAVION AMERSON</h1> */}
          </div>
      </div>
    );
  }
}

export default Footer;