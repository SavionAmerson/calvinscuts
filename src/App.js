import React from 'react';
import $ from 'jquery'; 
import AOS from "aos";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar";
import NavbarNew from "./components/navbar-mobile";
import Calvin from "./components/home-components/calvin";
import Bio from "./components/home-components/bio";
import Location from "./components/home-components/location";
import Contact from "./components/home-components/contact";
import Footer from "./components/footer";
import BestWork from "./components/home-components/best-work";
import SimpleCuts from "./components/cuts-components/simple-cuts";
import FancyCuts from "./components/cuts-components/fancy-cuts";
import Braids from "./components/special-style-components/braids";
import Dyes from "./components/special-style-components/dye-jobs";
import Checkout from "./components/checkout";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavbarNew />
      <Router>
          <Route path="/" exact component={Calvin} />
          <Route path="/" exact component={Bio} />
          <Route path="/" exact component={BestWork} />
          <Route path="/" exact component={Contact} />
          {/* <Route path="/" exact component={Location} /> */}

          <Route path="/cutstyles" exact component={SimpleCuts} />
          <Route path="/cutstyles" exact component={FancyCuts} />

          <Route path="/specials" exact component={Braids} />
          <Route path="/specials" exact component={Dyes} />

          <Route path="/checkout" exact component={Checkout} />

      </Router>
      <Footer />
    </div>
  );
}

$("document").ready(function() {
  $(".card-body").click(function() {
    var theName = this.innerText.replace("$10.00",'').replace("$20.00", '').replace("$30.00", '').replace("$25.00", '');
    localStorage.setItem("styleName", theName);
 });
});

let styleName = localStorage.getItem("styleName");



AOS.init({
  duration: 1200,
})

export default App;
export {styleName};