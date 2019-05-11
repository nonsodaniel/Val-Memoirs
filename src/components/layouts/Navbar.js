import React, { Component } from "react";
import Dp from "../style/images/admin_dp.png";
import CreateStory from "../layouts/CreateStory";

class Navbar extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <i
            className="material-icons"
            style={{
              color: "rgb(247, 21, 21)",
              cursor: "pointer",
              fontSize: "37px"
            }}
          >
            favorite
          </i>
          <a className="navbar-brand" href="#" style={{ fontWeight: "500" }}>
            Val Memorais
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {/* <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li> */}
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Account
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li> */}
            </ul>
            <button
              className="btn btn-outline-danger my-2 my-sm-0"
              data-toggle="modal"
              data-target="#exampleModalLong"
            >
              {/* <i
                className="material-icons"
                style={{
                  color: "rgb(247, 21, 21)",
                  cursor: "pointer"
                  // fontSize: "37px"
                }}
              >
                favorite
              </i> */}
              Create Your Awesome Story
            </button>
          </div>
        </nav>
        <CreateStory />
      </header>
    );
  }
}

export default Navbar;
