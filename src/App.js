import React from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Calvin from "./components/home-components/calvin";
import Bio from "./components/home-components/bio";
import Location from "./components/home-components/location";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Calvin />
      <Bio />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
