import React, { Component } from "react";
import Button from "./components/Button.jsx";
import axios from "axios";
import styled from 'styled-components';

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
          profile_image: response.data.avatar_url,
          gitun: response.data.login,
          info: JSON.stringify(response.data, undefined, 2),
          followers: response.data.followers,
          public_repos: response.data.public_repos,
          following: response.data.following,
          location: response.data.location,
          bio: response.data.bio,
          hireable: response.data.hireable
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
          <h1 className="App-title">GitHive</h1>
        </header>
        <p className="App-intro">Watch this space...</p>
        <Form
          formData={this.state.formData}
          handleUserFormSubmit={this.handleUserFormSubmit}
          handleFormChange={this.handleFormChange}
        />
        <img image="true" src={this.state.profile_image} />
        <div>  
          <b>Username:</b> 
          <p>{this.state.gitun}</p>
        </div>
        <div>
          <b>Repository:</b>
          <p>{this.state.public_repos} </p>
        </div>
        <div>
          <b>Followers:</b>
          <p>{this.state.followers} </p>
        </div>
        <div>
          <b>Following:</b>
          <p>{this.state.following} </p>
        </div>
        <div>
          <b>Location:</b>
          <p> {this.state.location} </p>
        </div>
        <div>
          <b>Bio:</b>
          <p> {this.state.bio} </p>
        </div>
        <div>
          <b>Hireable:</b>
          <p>{this.state.hireable} </p>
        </div>

        <b>Information:</b>
        <pre>{this.state.info}</pre>
      </div>
    );
  }
}

export default App;
