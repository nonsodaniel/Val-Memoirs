import React, { Component } from "react";
import Dp from "../style/images/admin_dp.png";

class Navbar extends Component {
  render() {
    return (
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Val Memorais
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li
                class="nav-item"
                data-toggle="modal"
                data-target="#exampleModalLong"
              >
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <div class="dropdown-divider" />
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-primary my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <div
          class="modal fade"
          id="exampleModalLong"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Create Your Story
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label">
                      First Name:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label">
                      Last Name:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label">
                      User Name:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label">
                      Headline:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="message-text" class="col-form-label">
                      Add Your Story:
                    </label>
                    <textarea class="form-control" id="message-text" />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Submit Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
