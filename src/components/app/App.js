import React, { Component } from 'react';
import ActionText from '../action-text/ActionText';
import GameButton from '../game-buttons/GameButtons';
import './App.css';
import CommentText from '../comment-text/CommentText';

const VIKING_MASTER_CHANCE = 0.2;
const QUESTION_MASTER_CHANCE = 0.1;
const COMMENTARY_CHANCE = 1;

class App extends Component {
  constructor() {
    super();
    this.ticked = false;
    this.state = {
      gameParams: {
        base: true,
        no_library: false,
        icebreak: false,
        violence: false,
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
    this.ticked = true;
  }

  render() {
    const {
      isViking, isQuestion, gameParams,
    } = this.state;

    const tickOnce = this.ticked;
    if (this.ticked) {
      this.ticked = false;
    }

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
            label={{ on: 'Linkedin master', off: 'Blushing introvert' }}
            callback={this.handleParamClick}
            type="icebreak"
            value={gameParams.icebreak}
          />
          <GameButton
            label={{ on: 'F*ck\'em up', off: 'Be nice to your friends, Timmy' }}
            callback={this.handleParamClick}
            type="violence"
            value={gameParams.violence}
          />
        </div>
        <ActionText gameParams={gameParams} clickTick={this.clickTickHandler} />
        {isQuestion ? (<div><span className="event-span">Player has become Questionmaster</span><br /></div>) : null}
        {isViking ? (<div><span className="event-span">Player has become Vikingmaster</span><br /></div>) : null}
        <CommentText shouldRender={tickOnce && Math.random() < COMMENTARY_CHANCE} />
      </div>
    );
  }
}

export default App;
