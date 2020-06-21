import React from "react";

class SimpleCuts extends React.Component {
  render() {
    return (
      <div className="hairstyle-cuts-section">
        <div class="hairstyle-options">
          <h1>SIMPLE CUTS</h1>
          <div data-aos="fade-up" data-aos-duration="700" className="hairstyle-photos">

            <div class="card">
              <img src={require("../../images/BW2.jpg")} class="card-img-top" alt="..." />
              <div class="card-body" id="card-body">
                <h5 class="card-title">The Staircase</h5>
                <a href="/checkout" class="btn btn-primary">
                  $10.00
                </a>
              </div>
            </div>

            <div class="card">
              <img src={require("../../images/BW3.jpg")} class="card-img-top" alt="..." />
              <div class="card-body" id="card-body">
                <h5 class="card-title">The Cresant</h5>
                <a href="/checkout" class="btn btn-primary">
                $10.00
                </a>
              </div>
            </div>

            <div class="card">
              <img src={require("../../images/throw.jpg")} class="card-img-top" alt="..." />
              <div class="card-body" id="card-body">
                <h5 class="card-title">The "Just throw your clippers at me"</h5>
                <a href="/checkout" class="btn btn-primary">
                $10.00
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}



export default SimpleCuts;