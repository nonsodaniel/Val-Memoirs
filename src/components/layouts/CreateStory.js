import React, { Component } from "react";
import uuid from "uuid";

class CreateStory extends Component {
  state = {};

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
    console.log(this.state);
  };
  handleSubmit = e => {
    e.preventDefault();
    let postArr  =  [];
    
    // let story = document.getElementById("story").value,
    //   id = uuid(),
    //   date = new Date();
    //     postArr.push(postObj);
    //  localStorage.setItem("LocalData", JSON.stringify(postArr));


    if(typeof(Storage) !== "undefined") {
        if (localStorage.getItem('postArr') && localStorage.getItem('postArr').length > 0)
            postArr = JSON.parse(localStorage.getItem('postArr'));
          let postState = this.state;

            let postObj = {
              id: uuid(),
              firstName : postState.firstName,
              lastName : postState.lastName,
              userName : postState.userName,
              headline : postState.headline,
              story : document.getElementById("story").value,
              likes: 0
            }

        postArr.push(postObj);

        localStorage.setItem('postArr', JSON.stringify(postArr));

       let  retrivedOjects = localStorage.getItem('postArr');

        console.log('retrivedOjects: ', JSON.parse(retrivedOjects));
    } else {
        alert("Error: Localstorage not supported");
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
                    onChange={this.handleChange}
                    id="headline"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">
                    Add Your Story:
                  </label>
                  <textarea className="form-control" id="story" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleSubmit}
              >
                Submit Story
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateStory;
