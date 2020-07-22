import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import DCandidates from './components/DCandidates';
import { Container } from "@material-ui/core";
class App extends Component {
  render() {
    return (
      <Provider store = {store}>
          <Container maxWidth="lg" ></Container>
          <DCandidates />
      </Provider>
    );
  }
}

export default App;
