/* global document */
import React from 'react';
import PropTypes from 'prop-types';
import './CommentText.css';

const commentary = [
  'ohhh yes, right there',
  'booop',
  'yes daddy click me harder',
  'a friendly task for a friendly person',
  'i can see you through the webcammmm',
  'yea, click it',
  'oh my',
  'you can do it',
  'you have my blessing',
  'speak friend, and do the task',
  'are you drunk yet',
  'now with 100% more floating text',
  'if only your parents could see you now',
  'don\'t chicken out',
  'uh oh',
  'come on, faster',
  'come on, do it',
  'great scott',
  'hurry hurry',
  'this hurts me more than it hurts you',
  'i\'d hate to say it but... you did click it',
  'come on, this one\'s easy',
  'task smoke... don\'t breathe this',
  'hey can you lend me some cash',
  'why don\'t you uber home, bud',
  'you shouldn\'t do this. on second thought, you should',
  'uhhhh your turn',
  'should i be naked for this',
  'toasty!',
  'god can see all your sinning',
  'trust me',
  'oh would you look at at that great idea right there',
  'well paint me green and call me a pickle',
  'uhhh it wasn\'t me',
  'hold on let me get my camera',
  'twitter says hello',
  'turn down for actually what though',
  'get that bread',
  'yooo hoooo',
  'yeeeeeeeeee hawwwwwww',
];
export default class CommentText extends React.Component {
  static getMeFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  render() {
    const { shouldRender, overrideText } = this.props;
    if (!shouldRender) {
      return null;
    }
    const el = document.getElementById('comment-text-span');
    if (el) {
      el.classList.remove('animate');
      void el.offsetWidth; // eslint-disable-line
      el.classList.add('animate');
    }
    return (
      <div className="comment-text-container">
        <span className="comment-text animate" id="comment-text-span">
          {overrideText || CommentText.getMeFromArray(commentary)}
        </span>
      </div>
    );
  }
}

CommentText.propTypes = {
  shouldRender: PropTypes.bool.isRequired,
  overrideText: PropTypes.string,
};

CommentText.defaultProps = {
  overrideText: undefined,
};
