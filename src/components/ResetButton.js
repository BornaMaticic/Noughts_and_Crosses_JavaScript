import './Board.css';
import React, {Component} from 'react';

function ResetButton(props) {
  return (
    <button className="reset-button" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default ResetButton;
