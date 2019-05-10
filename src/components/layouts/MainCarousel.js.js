import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import Couple1 from "./images/couple 5.jpg";
import Couple2 from "./images/picture1.jpg";
import Couple3 from "./images/couple 4.jpg";
import Couple4 from "./images/couple 2.jpg";
import Couple5 from "./images/couple 6.jpg";

class MainCarousel extends Component {
  render() {
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
              src={Couple1}
              style={{ height: "400px" }}
              alt="First slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Title</h5>
              <p>We are global</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={Couple2}
              style={{ height: "400px" }}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={Couple3}
              style={{ height: "400px" }}
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={Couple4}
              style={{ height: "400px" }}
              alt="Fourth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={Couple5}
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
