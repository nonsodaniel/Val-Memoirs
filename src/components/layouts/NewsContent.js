import React, { Component, Fragment } from "react";
import NewsDetail from "../events/EventDetail";
import "./css/search.css";
class NewsContent extends Component {
  state = {
    isClick: false,
    storyBox: []
  };

  componentDidMount() {
    let localData = JSON.parse(localStorage.getItem("localDb"));
    // console.log("Story box", localData);
    this.setState({ storyBox: localData });
  }

  handleLike = e => {
    let localData = this.state.storyBox;
    console.log(e.target.id);
    let targetId = e.target.id;

    let filteredId = localData.map(o => {
      if (o.id === targetId) {
        console.log("Yea", o);
      }
      return o;
    });
    return console.log("Mine", filteredId);
    let like_target = filteredId[0].likes;
    like_target = parseInt(like_target) + 1;
    // document.getElementsByClassName("hanldeView").click();
  };

  handleView = e => {
    // console.log(e.target.id);
    let targetId = e.target.id;
    let localData = localStorage.getItem("localDb");
    localData = JSON.parse(localData);

    let filteredNews = localData.filter(o => {
      // console.log(o.id);
      return o.id === targetId;
    });
    console.log("Post array", filteredNews);
    this.setState({ newsDetail: filteredNews[0] });
  };

  truncateStory = (str, length, ending) => {
    if (length === null) {
      length = 100;
    }
    if (ending === null) {
      ending = "...";
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };

  render() {
    // let storyDetail = this.state.storyBox ? this.state.storyBox : [];
    let localData = JSON.parse(localStorage.getItem("localDb"));
    let storyDetail = localData ? localData || localData === null : [];
    // console.log("Story detail", localData);
    let storyList = storyDetail ? (
      storyDetail.map((o, i) => (
        <div className="col-md-4" id="random" key={o.id}>
          <div className="card mb-4 shadow-sm">
            <img src={o.banner} alt="..." className="img-thumbnail" />
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <small className="text-muted">
                    <i className="material-icons">scheduler</i> 3 Days Ago
                  </small>
                </div>
                <div className="col-md-6">
                  by {o.firstName} {o.lastName}
                </div>
              </div>
              <p className="card-text" style={{ textAlign: "center" }}>
                <b>{o.headline}</b>
              </p>
              <p className="card-text story">
                {this.truncateStory(o.story, 100, "...")}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary handleView"
                    onClick={this.handleView}
                    id={o.id}
                    data-toggle="modal"
                    data-target="#newsDetail"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    <i
                      className="material-icons"
                      id={o.id}
                      style={{ color: "#bf1717", cursor: "pointer" }}
                      onClick={this.handleLike}
                    >
                      favorite
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <NewsDetail data={this.state.newsDetail} />
        </div>
      ))
    ) : (
      <div className="empty-story">No story to show</div>
    );

    let storyDetails = this.state.newsDetail;
    console.log("storyDetails", storyDetails);

    return (
      <Fragment>
        <section class="search-sec">
          <div class="container">
            <form action="#" method="post" novalidate="novalidate">
              <div class="row">
                <div class="col-lg-12">
                  <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                      <input
                        type="text"
                        class="form-control search-slt"
                        placeholder="Enter Pickup City"
                      />
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                      <input
                        type="text"
                        class="form-control search-slt"
                        placeholder="Enter Drop City"
                      />
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                      <select
                        class="form-control search-slt"
                        id="exampleFormControlSelect1"
                      >
                        <option>Select Stories</option>
                        <option>Love story</option>
                        <option> Romance story</option>
                      </select>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                      <button type="button" class="btn btn-danger wrn-btn">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="section-heade text-center">
              <h2>
                Care About{" "}
                <b
                  className=" text-uppercase text-bold text-danger"
                  style={{ fontSize: " 35px", fontWeight: "900" }}
                >
                  Memories?
                </b>
              </h2>
              <p>Here are some of our User's Memories</p>
            </div>
            <br />
            <br />
            <br />
            <div className="row">{storyList}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NewsContent;
