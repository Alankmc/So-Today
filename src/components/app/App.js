import React, { Component } from 'react';
import ActionText from '../action-text/ActionText';
import CommentText from '../comment-text/CommentText';
import ConfigPane from '../config-pane/ConfigPane';
import './App.css';

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
        <ConfigPane gameParams={gameParams} callback={this.handleParamClick} />
        <ActionText gameParams={gameParams} clickTick={this.clickTickHandler} />
        {isQuestion ? (<div><span className="event-span">Player has become Questionmaster</span><br /></div>) : null}
        {isViking ? (<div><span className="event-span lower">Player has become Vikingmaster</span><br /></div>) : null}
        <CommentText shouldRender={tickOnce && Math.random() < COMMENTARY_CHANCE} />
      </div>
    );
  }
}

export default App;
