import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../src/components/layouts/Navbar";
import MainCarousel from "../src/components/layouts/MainCarousel.js";
import NewsContent from "../src/components/layouts/NewsContent";
// import EventDetails from "../src/components/events/EventDetail";
import Footer from "../src/components/layouts/Footer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter />
        <Navbar />
        <MainCarousel />
        <NewsContent />
        <Footer />
      </div>
    );
  }
}

export default App;
