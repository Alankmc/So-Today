import React from 'react';
import GameButton from './game-buttons/GameButtons';
import './ConfigPane.css';

export default class ConfigPane extends React.Component {
  constructor() {
    super();
    this.everClicked = false;
    this.state = {
      isConfigOpen: false,
    };
  }

  handleConfigClick = () => {
    const { isConfigOpen } = this.state;
    this.everClicked = true;
    this.setState({ isConfigOpen: !isConfigOpen });
  }

  render() {
    const { gameParams, callback } = this.props;
    const { isConfigOpen } = this.state;
    let flipClass;

    if (!this.everClicked) {
      flipClass = 'config-button';
    } else {
      flipClass = `config-button ${isConfigOpen ? 'flipped' : 'unflipped'}`;
    }

    return (
      <div className="config-pane">
        <div
          className={flipClass}
        >
          <span
            onClick={this.handleConfigClick}
          >
            {isConfigOpen ? 'Hide configure' : 'Show configure'}
          </span>
        </div>

        <div className={`button-container ${isConfigOpen ? 'open' : ''}`}>
          <GameButton
            label={{ on: 'I LOVE YELLING', off: 'shh we\'re at the library' }}
            callback={callback}
            type="no_library"
            value={gameParams.no_library}
          />
          <GameButton
            label={{ on: 'Linkedin master', off: 'Blushing introvert' }}
            callback={callback}
            type="icebreak"
            value={gameParams.icebreak}
          />
          <GameButton
            label={{ on: 'F*ck\'em up', off: 'Be nice to your friends, Timmy' }}
            callback={callback}
            type="violence"
            value={gameParams.violence}
          />
        </div>
      </div>
    );
  }
}
