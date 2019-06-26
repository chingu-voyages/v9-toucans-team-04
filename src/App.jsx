import React, { Component } from "react";
import Button from "./components/Button.jsx";
import axios from "axios";
import styled from 'styled-components';
import Form from "./components/Form.jsx";
import Hexagon from 'react-hexagon';
import './App.css';

// Will clean up the code and convert it to styled-components

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
        <div className="cellContainer">
                 <Hexagon
                        style={{stroke: '#000'}}
                        className="hex"
                        backgroundImage={this.state.profile_image}
                        src={this.state.profile_image}
                        flatTop
                        />
                  <g><Hexagon className="cell, username" flatTop><text x="180" y="250">Username:{this.state.gitun}</text></Hexagon></g>
                  <p>Location: {this.state.location} </p>
                  <p>Bio: {this.state.bio} </p>
                  <p>Followers: {this.state.followers} </p>
                  <p>Following: {this.state.following} </p>
                  <p>No. of Repos: {this.state.public_repos} </p>
                  <p>Hireable: {this.state.hireable} </p>
                  <b>Information:</b>
                  <pre>{this.state.info}</pre>
          </div>
          </div>
    );
  }
}

export default App;
