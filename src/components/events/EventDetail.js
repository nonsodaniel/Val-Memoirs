import React, { Component } from "react";
import Dp from "../style/images/admin_dp.png";
import CreateStory from "../layouts/CreateStory";

class Navbar extends Component {
  componentDidMount() {}

  render() {
    let article = this.props.data ? this.props.data : {};
    console.log("Nonso", article.id);

    return (
      <div
        className="modal fade"
        id="newsDetail"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                {article.headline}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <img
                  src={article.banner}
                  height="200"
                  id="image-box"
                  alt=""
                  style={{ width: "100%", height: "329px" }}
                />
              </div>
              <br />

              <div className="row">
                <div className="col-md-6">
                  {" "}
                  <i>
                    {article.firstName} {article.lastName}
                  </i>
                </div>
                <div className="col-md-6 text-right">On 5th jan 2019</div>
              </div>
              <hr />
              <p>{article.story}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
