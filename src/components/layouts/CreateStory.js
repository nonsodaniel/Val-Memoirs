import React, { Component } from "react";
import uuid from "uuid";
import Moment from "moment";
import swal from "sweetalert";

class CreateStory extends Component {
  state = { localData: [] };

  componentDidMount() {
    console.log("My props", this.props);
    let localData = JSON.parse(localStorage.getItem("localDb"));
    console.log("Localdata", localData);
    this.setState({ localData });
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
    console.log(this.state);
  };
  handleSubmit = e => {
    let storyText = document.getElementById("story").value;
    this.setState({ story: storyText });
    let state = this.state;

    e.preventDefault();
    this.setState({ isLoading: true });

    let postState = this.state;
    let postObj = {
      id: uuid(),
      firstName: postState.firstName,
      lastName: postState.lastName,
      userName: postState.userName,
      headline: postState.headline,
      story: document.getElementById("story").value,
      banner: postState.banner,
      likes: 0,
      date: new Date()
    };

    // return console.log("first name", postObj);

    if (
      postObj.firstName === undefined ||
      postObj.lastName === undefined ||
      postObj.userName === undefined ||
      postObj.headline === undefined ||
      postObj.story === ""
    ) {
      this.setState({ isLoading: false });
      return swal(
        "Response",
        "One or more empty feilds , please try again!",
        "error"
      );
    }

    let isUserExitst =
      state.localData != null
        ? state.localData.some(o => {
            if (o.userName === postObj.userName) {
              //  if name alreadyexist */
              return true;
            } else {
              return false;
            }
          })
        : null;

    if (isUserExitst) {
      this.setState({ isLoading: false });
      return swal(
        "Response",
        "This User Name Already Exist, Please Try Again",
        "error"
      );
    }
    console.log(postObj);
    if (postObj.banner === "" || postObj.banner === undefined) {
      this.setState({ isLoading: false });
      return swal("Response", "Please add a photo and try Again!", "error");
    }

    let localDb = [];
    if (typeof Storage !== "undefined") {
      if (
        localStorage.getItem("localDb") &&
        localStorage.getItem("localDb").length > 0
      )
        localDb = JSON.parse(localStorage.getItem("localDb"));

      localDb.push(postObj);

      setTimeout(() => {
        localStorage.setItem("localDb", JSON.stringify(localDb));
        this.setState({ isLoading: false });
        swal("Response", "Story  Successfully Created", "success");
      }, 2000);

      let retrivedOjects = localStorage.getItem("localDb");

      console.log("retrivedOjects: ", JSON.parse(retrivedOjects));
    } else {
      alert("Error: Localstorage not supported");
    }
  };

  previewFile = () => {
    var preview = document.getElementById("image-box");
    var file = document.querySelector("input[type=file]").files[0];
    var reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        preview.src = reader.result;
        let imgStr = reader.result;
        this.setState({ image: imgStr });
        console.log("My file result", imgStr);
        this.setState({ banner: imgStr });
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModalLong"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Create Your Story
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
              <form>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    First Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    onChange={this.handleChange}
                    id="firstName"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    onChange={this.handleChange}
                    id="lastName"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    User Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    onChange={this.handleChange}
                    id="userName"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Headline:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    onChange={this.handleChange}
                    id="headline"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">
                    Add Your Story:
                  </label>
                  <textarea className="form-control" required id="story" />
                </div>

                <div className="row">
                  <div className="col-md-2">Upload Image : </div>
                  <div className="col-md-8">
                    <input
                      type="file"
                      className="form-control"
                      id="images"
                      placeholder="City"
                      onChange={this.previewFile}
                    />
                    <img
                      src=""
                      height="200"
                      id="image-box"
                      alt=""
                      style={{ marginTop: "13px" }}
                    />
                  </div>
                </div>
                <br />
                <br />
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleSubmit}
              >
                {this.state.isLoading ? (
                  <span>
                    <span
                      className="spinner-grow spinner-grow-sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Creating Story...
                  </span>
                ) : (
                  "Create Story"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateStory;
