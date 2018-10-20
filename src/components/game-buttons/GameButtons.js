import React from 'react';

export default function GameButton(props) {
  const {
    label, callback, value, type,
  } = props;
  return (<button type="button" onClick={() => callback(type, !value)}>{label}</button>);
}
