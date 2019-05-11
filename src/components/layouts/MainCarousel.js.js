import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import Couple1 from "./images/couple 5.jpg";
import Couple2 from "./images/picture1.jpg";
import Couple3 from "./images/couple 4.jpg";
import Couple4 from "./images/couple 2.jpg";
import Couple5 from "./images/couple 6.jpg";

class MainCarousel extends Component {
  state = {
    slider: []
  };

  componentDidMount() {
    let url = `https://api.unsplash.com/photos/`,
      clientId = `30e7eae3f47846ed9a7904b0f1b52be616a4c69d6c847d59d3ca59391224c7fd`,
      page = 1,
      query = `valentine`;

    fetch(`${url}??page=${page}&query=${query}&client_id=${clientId}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log("Data", data);
        let slider = data.slice(0, 5);
        localStorage.setItem("Sliders", JSON.stringify(slider));
        this.setState({ slider });
      });
  }

  render() {
    // console.log(this.state.slider[0].id);
    let localSlider = JSON.parse(localStorage.getItem("Sliders"));
    console.log("My slides", localSlider);
    let slider1 = localSlider[0].urls.full;
    let slider2 = localSlider[1].urls.full;
    let slider3 = localSlider[2].urls.full;
    let slider4 = localSlider[3].urls.full;
    let slider5 = localSlider[4].urls.full;
    console.log(slider1);
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        style={{ height: "400px" }}
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          <li data-target="#carouselExampleIndicators" data-slide-to="3" />
          <li data-target="#carouselExampleIndicators" data-slide-to="4" />
          <li data-target="#carouselExampleIndicators" data-slide-to="5" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src={slider1}
              style={{ height: "400px" }}
              alt="First slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Title</h5>
              <p>We are global</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={slider2}
              style={{ height: "400px" }}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={slider3}
              style={{ height: "400px" }}
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={slider4}
              style={{ height: "400px" }}
              alt="Fourth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={slider5}
              style={{ height: "400px" }}
              alt="Fifth slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default MainCarousel;
