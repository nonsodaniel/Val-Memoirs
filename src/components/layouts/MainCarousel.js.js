import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class MainCarousel extends Component {
  render() {
    return (
      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">My Carousel Point</h1>
          <p class="lead text-muted">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don’t simply skip over it entirely.
          </p>
          <p>
            <a href="#" class="btn btn-primary my-2">
              Main call to action
            </a>
            <a href="#" class="btn btn-secondary my-2">
              Secondary action
            </a>
          </p>
        </div>
      </section>
    );
  }
}

export default MainCarousel;
