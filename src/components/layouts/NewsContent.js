import React, { Component, Fragment } from "react";
import NewsDetail from "../events/EventDetail";
import "./css/search.css";
import "./css/user.css";

class NewsContent extends Component {
  state = {
    isClick: false,
    storyBox: []
  };

  componentDidMount() {
    let localData = JSON.parse(localStorage.getItem("localDb"));
    console.log("Story box", localData);
    this.setState({ storyBox: localData });
  }

  handleLike = e => {
    let localData = this.state.storyBox;
    console.log(e.target.id);
    let targetId = e.target.id;

    let storyBox = localData.map(o => {
      console.log();
      if (o.id === targetId) {
        console.log("Yea", o);
        o.likes = parseInt(o.likes) + 1;
      }
      return o;
    });
    localStorage.setItem("localDb", JSON.stringify(storyBox));
    this.setState({ storyBox });
    return console.log("Mine", storyBox);
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
    let state = this.state;
    console.log("liks", state);
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
                    onClick={this.handleLike}
                    id={o.id}
                  >
                    <i
                      className="material-icons"
                      id={o.id}
                      style={{ color: "#bf1717", cursor: "pointer" }}
                    >
                      favorite
                    </i>{" "}
                    <sup style={{ fontSize: "16px" }}>{o.likes}</sup>
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
                        <option id="love">Love story</option>
                        <option id="romance"> Romance story</option>
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
        <br />

        <h4 className="text-center">Some Amazing Stories</h4>

        <div class="accordian" style={{ height: "200px" }}>
          <ul style={{ height: "400px" }}>
            <li>
              <div class="image_title">
                <a href="https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg">
                  KungFu Panda
                </a>
              </div>
              <a href="https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg">
                <img
                  alt="john doe"
                  src="http://thecodeplayer.com/uploads/media/3yiC6Yq.jpg"
                />
              </a>
            </li>
            <li>
              <div class="image_title">
                <a href="https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg">
                  Toy Story 2
                </a>
              </div>
              <a href="https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg">
                <img
                  alt="john doe"
                  src="http://thecodeplayer.com/uploads/media/40Ly3VB.jpg"
                />
              </a>
            </li>
            <li>
              <div class="image_title">
                <a href="https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg">
                  Wall-E
                </a>
              </div>
              <a href="https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg">
                <img
                  alt="john doe"
                  src="http://thecodeplayer.com/uploads/media/00kih8g.jpg"
                />
              </a>
            </li>
            <li>
              <div class="image_title">
                <a href="#">Up</a>
              </div>
              <a href="https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg">
                <img
                  alt="john doe"
                  src="http://thecodeplayer.com/uploads/media/2rT2vdx.jpg"
                />
              </a>
            </li>
            <li>
              <div class="image_title">
                <a href="#">Cars 2</a>
              </div>
              <a href="https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg">
                <img
                  alt="john doe"
                  src="http://thecodeplayer.com/uploads/media/8k3N3EL.jpg"
                />
              </a>
            </li>
            <li>
              <div class="image_title">
                <a href="#">Cars 2</a>
              </div>
              <a href="https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg">
                <img
                  alt="john doe"
                  src="http://thecodeplayer.com/uploads/media/8k3N3EL.jpg"
                />
              </a>
            </li>
            <li>
              <div class="image_title">
                <a href="#">Cars 2</a>
              </div>
              <a href="https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg">
                <img
                  alt="john doe"
                  src="http://thecodeplayer.com/uploads/media/8k3N3EL.jpg"
                />
              </a>
            </li>
            <li>
              <div class="image_title">
                <a href="#">Cars 2</a>
              </div>
              <a href="https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg">
                <img
                  alt="john doe"
                  src="http://thecodeplayer.com/uploads/media/8k3N3EL.jpg"
                />
              </a>
            </li>
          </ul>
        </div>
        <br />
      </Fragment>
    );
  }
}

export default NewsContent;
