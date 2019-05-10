import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../src/components/layouts/Navbar";
import MainCarousel from "../src/components/layouts/MainCarousel.js";
import NewsContent from "../src/components/layouts/NewsContent";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <MainCarousel />
        <NewsContent />
      </div>
    );
  }
}

export default App;
