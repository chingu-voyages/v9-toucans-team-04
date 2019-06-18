import React, { Component } from "react";
import Button from "./components/Button.jsx";
import axios from "axios";

import Form from "./components/Form.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gitun: "No username",
      info: "",
      formData: {
        username: ""
      }
    };
    this.handleUserFormSubmit = this.handleUserFormSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleUserFormSubmit(event) {
    event.preventDefault();
    axios
      .get("https://api.github.com/users/" + this.state.formData.username)
      .then(response =>
        this.setState({
          gitun: response.data.login,
          info: JSON.stringify(response.data, undefined, 2),
          followers: response.data.followers,
          public_repos: response.data.public_repos,
          following: response.data.following
        })
      )
      .catch(err => {
        console.log(err);
      });
  }

  handleFormChange(event) {
    const obj = this.state.formData;
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Github Analytics</h1>
        </header>
        <p className="App-intro">Watch this space...</p>
        <Form
          formData={this.state.formData}
          handleUserFormSubmit={this.handleUserFormSubmit}
          handleFormChange={this.handleFormChange}
        />
        <p>
          <b>Username:</b>
        </p>
        <p>{this.state.gitun}</p>
        <p>
          <b>Repository:</b>
        </p>
        <p>{this.state.public_repos} </p>
        <p>
          <b>Followers:</b>
        </p>
        <p>{this.state.followers} </p>
        <p>
          <b>Following:</b>
        </p>
        <p>{this.state.following} </p>

        <b>Information:</b>
        <pre>{this.state.info}</pre>
      </div>
    );
  }
}

export default App;
