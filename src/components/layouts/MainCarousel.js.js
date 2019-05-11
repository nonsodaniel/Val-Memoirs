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

    // fetch(`${url}??page=${page}&query=${query}&client_id=${clientId}`)
    fetch(
      `https://api.unsplash.com/search/photos/?query=lovers&&page=2&count=5&client_id=30e7eae3f47846ed9a7904b0f1b52be616a4c69d6c847d59d3ca59391224c7fd`
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log("Data", data);
        let slider = data.results.slice(0, 5).reverse();
        localStorage.setItem("Sliders", JSON.stringify(slider));
        console.log("Slider", slider);
        this.setState({ slider });
      });
  }

  render() {
    // console.log(this.state.slider[0].id);
    let localSlider = JSON.parse(localStorage.getItem("Sliders"));
    console.log("My slides", localSlider);
    let slider1 = localSlider ? localSlider[0].urls.regular : Couple1;
    let slider2 = localSlider ? localSlider[1].urls.regular : Couple2;
    let slider3 = localSlider ? localSlider[2].urls.regular : Couple3;
    let slider4 = localSlider ? localSlider[3].urls.regular : Couple4;
    let slider5 = localSlider ? localSlider[4].urls.regular : Couple5;
    // console.log(slider1);
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        style={{ height: "560px" }}
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
              style={{ height: "560px" }}
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
              style={{ height: "560px" }}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={slider3}
              style={{ height: "560px" }}
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={slider4}
              style={{ height: "560px" }}
              alt="Fourth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={slider5}
              style={{ height: "560px" }}
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
