import React from "react";

class Contact extends React.Component {
    render() {
      return (
        <div className="contact">
            
            <div class="container">
                <div class="row">
                <h1 class="col-md-12">CONTACT</h1>
                    <div class="contact-info col-md-4">
                    <p>You can contact Calvin with via phone or email. Or you can get in touch with him through social media listed below!</p>
                    </div>
                    <div class="contact-info col-md-8">
                    <div className="contact-methods">
                        <div className="email">
                        <p>EMAIL <img src={require("../../images/email.png")} /></p>
                        <p>Calvinscuts@gmail.com</p>
                        </div>
                        
                        <div className="phone">
                        <p>PHONE <img src={require("../../images/phone.png")} /></p>
                        <p>314-555-1212</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }

export default Contact;