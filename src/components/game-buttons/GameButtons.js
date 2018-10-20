import React from 'react';
import './GameButton.css';

export default function GameButton(props) {
  const {
    label, callback, value, type,
  } = props;
  return (
    <span
      className={`game-button-span ${value ? '' : 'off'}`}
      onClick={() => callback(type, !value)}
    >
      {value ? label.on : label.off}
    </span>
  );
}
