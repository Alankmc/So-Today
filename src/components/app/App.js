import React, { Component } from 'react';
import ActionText from '../action-text/ActionText';
import GameButton from '../game-buttons/GameButtons';
import './App.css';

const VIKING_MASTER_CHANCE = 0.2;
const QUESTION_MASTER_CHANCE = 0.1;

class App extends Component {
  constructor() {
    super();

    this.state = {
      gameParams: {
        base: true,
        no_library: false,
        icebreak: false,
      },
      isViking: false,
      isQuestion: false,
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

  clickTickHandler = () => {
    const { isViking, isQuestion } = this.state;

    this.setState({
      isViking: isViking ? false : Math.random() < VIKING_MASTER_CHANCE,
      isQuestion: isQuestion ? false : Math.random() < QUESTION_MASTER_CHANCE,
    });
  }

  render() {
    const { isViking, isQuestion } = this.state;
    const { gameParams } = this.state;
    console.log(this.state);
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
        <ActionText gameParams={gameParams} clickTick={this.clickTickHandler} />
        {isQuestion ? (<div><span className="event-span">Player has become Questionmaster</span><br /></div>) : null}
        {isViking ? (<span className="event-span">Player has become Vikingmaster</span>) : null}
      </div>
    );
  }
}

export default App;
