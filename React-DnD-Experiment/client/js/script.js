import React from 'react';
import ReactDOM from 'react-dom';

var mountNode = document.querySelector('#react-root');

CS.StateController.observe(knightPosition =>
  ReactDOM.render(
    <CS.Board knightPosition={knightPosition} />, mountNode)
);

// ReactDOM.render(<CS.Board knightPosition={[0, 0]}/>, mountNode);
