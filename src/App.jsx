import React, { Component } from "react";
import Button from "./components/Button.jsx";
import axios from "axios";
import styled from 'styled-components';
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';
import './App.css';
import Form from "./components/Form.jsx";

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
        <p className="App-intro">Watch this space... (P.S. These are NOT the project colours, lol)</p>
        <Form
          formData={this.state.formData}
          handleUserFormSubmit={this.handleUserFormSubmit}
          handleFormChange={this.handleFormChange}
        />

        <div className="HexagonGrid">
          <HexGrid className="hexgrid">
            <Layout size={{ x: 10, y: 10}} flat={true} spacing={1.1} height={400} width={400}>
              <img image="true" src={this.state.profile_image} />
              <Hexagon q={0} r={0} s={0}>  
                <Text>Username:{this.state.gitun}</Text>
              </Hexagon>
              <Hexagon q={0} r={1} s={0}> 
                <Text>Location: {this.state.location} </Text>
              </Hexagon>
              <Hexagon q={1} r={-1} s={0}> 
                <Text>Bio: {this.state.bio} </Text>
              </Hexagon>
              <Hexagon q={1} r={0} s={0}>
                <Text>Followers: {this.state.followers} </Text>
              </Hexagon>
              <Hexagon q={1} r={1} s={0}>
                <Text>More Further Down</Text>
              </Hexagon>
              <Hexagon q={2} r={-1} s={0}>
                <Text>Following: {this.state.following} </Text>
              </Hexagon>
              <Hexagon q={2} r={0} s={0}> 
                <Text>No. of Repos: {this.state.public_repos} </Text>
              </Hexagon>
              <Hexagon q={3} r={-1} s={0}> 
                <Text>Hireable: {this.state.hireable} </Text>
              </Hexagon>

              <b>Information:</b>
              <pre>{this.state.info}</pre>
            </Layout>
          </HexGrid>
        </div>
      </div>
    );
  }
}

export default App;
