import React from "react";

class Braids extends React.Component {
  render() {
    return (
      <div className="hairstyle-cuts-section">
        <div class="hairstyle-options">
          <h1>BRAIDS</h1>
          <div data-aos="fade-up" data-aos-duration="700" className="hairstyle-photos">

            <div class="card">
              <img src={require("../../images/umbrella.jpg")} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">The Umbrella</h5>
                <a href="/checkout" class="btn btn-primary">
                  $30.00
                </a>
              </div>
            </div>

            <div class="card">
              <img src={require("../../images/cinnabun.jpg")} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">The Cinnabun</h5>
                <a href="/checkout" class="btn btn-primary">
                $30.00
                </a>
              </div>
            </div>

            <div class="card">
              <img src={require("../../images/bus.jpg")} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">The "Almost missed the bus this morning"</h5>
                <a href="/checkout" class="btn btn-primary">
                $30.00
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Braids;
