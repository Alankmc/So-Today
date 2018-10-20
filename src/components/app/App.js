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

    return (
      <div id="root-app" className="App">
        <div className="button-container">
          <GameButton
            label={{ on: 'I LOVE YELLING', off: 'shh we\'re at the library' }}
            callback={this.handleParamClick}
            type="no_library"
            value={gameParams.no_library}
          />
          <GameButton
            label={{ on: 'Party animal', off: 'Blushing introvert' }}
            callback={this.handleParamClick}
            type="icebreak"
            value={gameParams.icebreak}
          />
        </div>
        <ActionText gameParams={gameParams} />
      </div>
    );
  }
}

export default App;
