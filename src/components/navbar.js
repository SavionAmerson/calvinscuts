import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo">
          <h1>CALVIN'S CUTS</h1>
        </div>
        <div className="nav-menu">
          <ul>
            <li>SPECIAL STYLES</li>

            <li>CUT STYLES</li>

            <li>HOME</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
