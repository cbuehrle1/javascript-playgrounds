import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


var mountNode = document.querySelector('#react-root');

CS.StateController.observe(knightPosition =>
  ReactDOM.render(
    <CS.Board knightPosition={knightPosition} />, mountNode)
);

// ReactDOM.render(<CS.Board knightPosition={[0, 0]}/>, mountNode);
