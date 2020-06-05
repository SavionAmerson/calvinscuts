import React from "react";

class FancyCuts extends React.Component {
    render() {
      return (
        <div className="hairstyle-cuts-section">
        <div class="hairstyle-options">
          <h1>FANCY CUTS</h1>
          <div className="hairstyle-photos">

            <div class="card">
              <img src={require("../../images/paintbrush.jpg")} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">The Paintbrush</h5>
                <a href="#" class="btn btn-primary">
                  $20.00
                </a>
              </div>
            </div>

            <div class="card">
              <img src={require("../../images/circle-of-life.jpg")} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">The Circle of Life</h5>
                <a href="#" class="btn btn-primary">
                $20.00
                </a>
              </div>
            </div>

            <div class="card">
              <img src={require("../../images/dre-beats.jpg")} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">The "Sorry, what was that?"</h5>
                <a href="#" class="btn btn-primary">
                $20.00
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      );
    }
  }

export default FancyCuts;