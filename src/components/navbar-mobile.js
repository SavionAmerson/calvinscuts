import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div className="mobile-navbar">
        
        <div className="logo">
          <img src={require("../images/scissors.png")} />
          <h1>CALVIN'S CUTS</h1>
        </div>

        <div class="container">
          <button
            type="button"
            class="nav-button"
            data-toggle="collapse"
            data-target="#demo"
          >
            <img src={require("../images/menu.png")} />
          </button>
          <ul id="demo" class="collapse">
            <a href="/">
              <li>HOME</li>
            </a>
            <a href="/cutstyles">
              <li>CUT STYLES</li>
            </a>
            <a href="/specials">
              <li>SPECIAL STYLES</li>
            </a>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
