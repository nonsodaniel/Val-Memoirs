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
          let postObj = this.state;

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
                    onChange={this.handleChange}
                    id="firstName"
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    onChange={this.handleChange}
                    id="lastName"
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">
                    User Name:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    onChange={this.handleChange}
                    id="userName"
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">
                    Headline:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    onChange={this.handleChange}
                    id="headline"
                  />
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label">
                    Add Your Story:
                  </label>
                  <textarea class="form-control" id="story" />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
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
