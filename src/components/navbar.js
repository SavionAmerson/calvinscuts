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
            <a href="/specials"><li>SPECIAL STYLES</li></a>

            <a href="/cutstyles"><li>CUT STYLES</li></a>

            <a href="/"><li>HOME</li></a>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
