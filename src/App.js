import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import RollingBanner from "./RollingBanner/RollingBanner.js";

function App() {
  return (
    <div className="App">
      <Router>
        <RollingBanner></RollingBanner>
      </Router>
    </div>
  );
}

export default App;
