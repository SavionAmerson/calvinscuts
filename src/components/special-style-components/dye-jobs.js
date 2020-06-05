import React from "react";

class Dyes extends React.Component {
  render() {
    return (
      <div className="hairstyle-cuts-section">
        <div class="hairstyle-options">
          <h1>DYES</h1>
          <div className="hairstyle-photos">

            <div class="card">
              <img src={require("../../images/staircase-2.jpg")} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">The Staircase Part 2</h5>
                <a href="#" class="btn btn-primary">
                  $25.00
                </a>
              </div>
            </div>

            <div class="card">
              <img src={require("../../images/whoops.jpg")} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">The "whoops"</h5>
                <a href="#" class="btn btn-primary">
                $25.00
                </a>
              </div>
            </div>

            <div class="card">
              <img src={require("../../images/huh.jpg")} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">The ???</h5>
                <a href="#" class="btn btn-primary">
                $25.00
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Dyes;
