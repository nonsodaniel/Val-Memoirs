import React, { Component } from "react";
import Dp from "../style/images/admin_dp.png";

class NewsContent extends Component {
  state = {
    isClick: false
  };

  handleView = e => {
    console.log(e.target.id);
    let targetId = e.target.id;
    let localData = localStorage.getItem("postArr");
    localData = JSON.parse(localData);

    let filteredId = localData.filter(o => {
      console.log(o.id);
      return o.id === targetId;
    });
    console.log("Post array", localData, filteredId);
  };

  render() {
    return (
      <div className="album py-5 bg-light">
        <div className="container">
          <div class="section-heade text-center">
            <h2>
              Care About{" "}
              <i className="font-italic text-uppercase text-bold text-danger">
                Memories?
              </i>
            </h2>
            <p>Here are some of our User's Memories</p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
                <div className="card-body">
                  <p className="card-text">
                    This is jst the first stage of my Demo App. Please bear with
                    me for any Ononviniences and do not forget to keep in touch
                    with us
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={this.handleView}
                        Id="79674fe1-9085-4f11-a5b5-763d40367cde"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Other Actions
                      </button>
                    </div>
                    <small className="text-muted">3 Days</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4" id="random">
              <div className="card mb-4 shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
                <div className="card-body">
                  <span className="row">
                    <small className="text-muted">
                      <i className="material-icons">scheduler</i> 3 Days Ago
                      <i className="material-icons">favorite_border</i>
                    </small>
                  </span>
                  <p className="card-text" style={{ textAlign: "center" }}>
                    <b>My News Title here</b>
                  </p>
                  <p className="card-text">
                    This is jst the first stage of my Demo App. Please bear with
                    me for any Ononviniences and do not forget to keep in touch
                    with us
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={this.handleView}
                        Id="ced05147-6953-497e-bbd2-4a20f16b8329"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Other Actions
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
                <div className="card-body">
                  <p className="card-text">
                    This is jst the first stage of my Demo App. Please bear with
                    me for any Ononviniences and do not forget to keep in touch
                    with us
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={this.handleView}
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Other Actions
                      </button>
                    </div>
                    <small className="text-muted">3 Days</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsContent;
