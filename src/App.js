import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar";
import Calvin from "./components/home-components/calvin";
import Bio from "./components/home-components/bio";
import Location from "./components/home-components/location";
import Footer from "./components/footer";
import BestWork from "./components/home-components/best-work";
import SimpleCuts from "./components/cuts-components/simple-cuts";
import FancyCuts from "./components/cuts-components/fancy-cuts";
import Braids from "./components/special-style-components/braids";
import Dyes from "./components/special-style-components/dye-jobs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
          <Route path="/" exact component={Calvin} />
          <Route path="/" exact component={Bio} />
          <Route path="/" exact component={BestWork} />
          {/* <Route path="/" exact component={Location} /> */}

          <Route path="/cutstyles" exact component={SimpleCuts} />
          <Route path="/cutstyles" exact component={FancyCuts} />

          <Route path="/specials" exact component={Braids} />
          <Route path="/specials" exact component={Dyes} />

      </Router>
      <Footer />
    </div>
  );
}

export default App;
