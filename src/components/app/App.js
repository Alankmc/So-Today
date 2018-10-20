import React, { Component } from 'react';
import ActionText from '../action-text/ActionText';
import GameButton from '../game-buttons/GameButtons';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      gameParams: {
        base: true,
        no_library: false,
        icebreak: false,
      },
    };
  }

  handleParamClick = (key, value) => {
    const { gameParams } = this.state;
    const newParams = {
      ...gameParams,
      [key]: value,
    };
    this.setState({ gameParams: newParams });
  }

  render() {
    const { gameParams } = this.state;
    console.log('ummm.... not rendering?');
    return (
      <div id="root-app">
        <h2>Current Game Settings:
          { gameParams.no_library ? 'No Library' : ''},
          {gameParams.icebreak ? 'Icebreak' : ''}
        </h2>
        <GameButton
          label="Not at the Library"
          callback={this.handleParamClick}
          type="no_library"
          value={gameParams.no_library}
        />
        <GameButton
          label="Socialize"
          callback={this.handleParamClick}
          type="icebreak"
          value={gameParams.icebreak}
        />
        <ActionText gameParams={gameParams} />
      </div>
    );
  }
}

export default App;
