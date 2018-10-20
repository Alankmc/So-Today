import React from 'react';
import ShareBuilder from './action-builders/ShareBuilder';

const ACTIONS = ['share'];

export default class ActionText extends React.Component {
  state = {
    currentAction: undefined,
    actionText: 'Press the button. I know you want to.',
  };

  static getMeFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  buttonHandler = () => {
    const thisAction = ActionText.getMeFromArray(ACTIONS);
    let thisActionText;
    switch (thisAction) {
      case 'share':
      case 'challenge':
      case 'act_out':
        // Challenge has as ACTION - (PLAYER) - TEXT - INFO structure
        thisActionText = this.builders[thisAction].buildAction();
        break;
      default:
        thisActionText = 'Uh whoops hang on';
        break;
    }
    this.setState({ currentAction: thisAction, actionText: thisActionText });
  }

  render() {
    const { gameParams } = this.props;
    const { actionText } = this.state;
    this.builders = {
      share: new ShareBuilder(gameParams),
    };

    return (
      <div id="action-text">
        <span>{actionText}</span>
        <br />
        <button type="button" onClick={this.buttonHandler}>Do it.</button>
      </div>
    );
  }
}
