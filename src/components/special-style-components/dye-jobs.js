import React from "react";

class Dyes extends React.Component {
  render() {
    return (
      <div className="hairstyle-cuts-section">
        <div class="hairstyle-options">
          <h1>DYES JOBS</h1>
          <div data-aos="fade-up" data-aos-duration="700" className="hairstyle-photos">

            <div class="card">
              <img src={require("../../images/staircase-2.jpg")} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">The Staircase Part 2</h5>
                <a href="/checkout" class="btn btn-primary">
                  $25.00
                </a>
              </div>
            </div>

            <div class="card">
              <img src={require("../../images/whoops.jpg")} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">The ???</h5>
                <a href="/checkout" class="btn btn-primary">
                $25.00
                </a>
              </div>
            </div>

            <div class="card">
              <img src={require("../../images/huh.jpg")} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">The Enji Todoroki</h5>
                <a href="/checkout" class="btn btn-primary">
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
