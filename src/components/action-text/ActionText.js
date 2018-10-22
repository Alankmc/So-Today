import React from 'react';
import ShareBuilder from './action-builders/ShareBuilder';
import ChallengeBuilder from './action-builders/ChallengeBuilder';
import ArtistBuidler from './action-builders/ArtistBuidler';
import ViolenceBuilder from './action-builders/ViolenceBuilder';
import './ActionText.css';
import PartyBitsBuilder from './action-builders/PartyBitsBuilder';

const ACTIONS = ['share', 'challenge', 'artist', 'violence'];
const WEIGHTS = [3, 4, 4, 3];
const weightSum = WEIGHTS.reduce((cum, curr) => cum + curr);
let buff = 0;
const stdWeights = WEIGHTS.map((el) => {
  buff += el / weightSum;
  return buff;
});
const BREAK_AT = 5;

export default class ActionText extends React.Component {
  static breakText(text) {
    const breaker = text.split(' ');
    let currIndex = 0;
    const currArr = [];
    while (currIndex - breaker.length) {
      const thisArr = [];
      for (let i = 0; i < BREAK_AT; i += 1) {
        if (currIndex === breaker.length) {
          break;
        }
        thisArr.push(breaker[currIndex]);
        currIndex += 1;
      }
      currArr.push(thisArr.join(' '));
    }

    return currArr;
  }

  state = {
    actionText: 'Click me. I know you want to.',
  };

  static getMeFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  static getMeFromWeightedArray(arr, weights) {
    const thisRand = Math.random();

    return arr[weights.findIndex(el => el > thisRand)];
  }

  textClick = () => {
    const { clickTick } = this.props;

    const thisAction = ActionText.getMeFromWeightedArray(ACTIONS, stdWeights);
    let thisActionText;
    switch (thisAction) {
      case 'share':
      case 'challenge':
      case 'artist':
      case 'violence':
      case 'party_bits':
        // Challenge has as ACTION - (PLAYER) - TEXT - INFO structure
        thisActionText = this.builders[thisAction].buildAction();
        break;
      default:
        thisActionText = 'Uh whoops hang on';
        break;
    }
    clickTick();
    this.setState({ actionText: thisActionText });
  }

  render() {
    const { gameParams } = this.props;
    const { actionText } = this.state;
    this.builders = {
      share: new ShareBuilder(gameParams),
      challenge: new ChallengeBuilder(gameParams),
      artist: new ArtistBuidler(gameParams),
      violence: new ViolenceBuilder(gameParams),
      party_bits: new PartyBitsBuilder(gameParams),
    };

    const brokenText = ActionText.breakText(actionText);

    return (
      <div id="action-text" className="action-text-container">
        <span
          onClick={this.textClick}
          id="action-text--span"
          className="action-text"
        >
          {brokenText.map(text => (<div key={text}>{text}<br /></div>))}
        </span>
        <br />
      </div>
    );
  }
}
