import React from "react";
import {styleName} from "./../App";

class Checkout extends React.Component {

    state= {
        on: false
      }  
    
      toggle = () =>{
        this.setState({
          on: !this.state.on
        })
      }
    
    appointmentInfo(name, email, phone, attendees, date, time) {
        name = document.getElementById('userName').value;
        email = document.getElementById('userEmail').value;
        phone = document.getElementById('userPhone').value;
        date = document.getElementById('appt-date').value;
        time = document.getElementById('appt-time').value;
    
        console.log(name, email, phone, attendees, date, time);
    
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPhone", phone);
        localStorage.setItem("apptDate", date);
        localStorage.setItem("apptTime", time);
      }

  render() {

    const name = localStorage.getItem("userName");
    const email = localStorage.getItem("userEmail");
    const time = localStorage.getItem("apptTime");
    const date = localStorage.getItem("apptDate");


    return (
      <div data-aos="fade-up" data-aos-duration="700" className="checkout-page">
        {this.state.on || (
          <div className="checkout-section col-6">
            <h1>You are now schedueling for {styleName}</h1>

            <ul className="customer-info">
              <li>
                <h1>NAME</h1>
                <input
                  type="text"
                  id="userName"
                  name="name"
                  placeholder="Name"
                  required
                />
              </li>

              <li>
                <h1>EMAIL</h1>
                <input
                  type="email"
                  id="userEmail"
                  placeholder="Email"
                  required
                />
              </li>

              <li>
                <h1>PHONE</h1>
                <input
                  placeholder="Phone (xxx-xxx-xxxx)"
                  type="tel"
                  id="userPhone"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                />
              </li>

              <li>
                <h1>DATE</h1>
                <input
                  placeholder=""
                  type="date"
                  id="appt-date"
                  name="trip-start"
                  min="2020-01-01"
                  max="2020-12-31"
                />
              </li>

              <li>
                <h1>TIME</h1>
                <input
                  placeholder=""
                  type="time"
                  id="appt-time"
                  name="appt"
                  min="09:00"
                  max="18:00"
                  required
                />
              </li>

              <li className="book-button">
                <button onClick={(event) => {this.appointmentInfo(); this.toggle();}}>BOOK NOW</button>
              </li>
            </ul>
          </div>
        )}

        <div>
          {this.state.on && (
            <div className="thank-you-section">
              <div data-aos="zoom-in" className="thank-you">
                <h1>
                  Thank you {name}! Your appointment for {styleName} has been schedueled for {time} on {date}!
                </h1>
                <h2>A digital receipt will be sent to your email shortly!</h2>
                <a href="/"><button className="sweet">SWEET!</button></a>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}


export default Checkout;
