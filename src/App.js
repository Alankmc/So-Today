import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ACTIONS, PLAYERS } from './constants';

function getMe(list) {
  return list[Math.floor(list.length * Math.random())];
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      gameParams: {
        NO_LIBRARY: false,
        ICEBREAK: false,
      },
    };
  }

  render() {
    const { gameParams } = this.state;
    const { NO_LIBRARY, ICEBREAK } = gameParams;

    return (
      <div id="root-app">
        <h2>Current Game Settings: {NO_LIBRARY ? 'No Library' : ''}, {ICEBREAK ? 'Icebreak' : ''}</h2>
      </div>
    );
  }
}

export default App;
