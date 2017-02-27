if (window.CS === undefined) { window.CS = {}; }


(() => {

  class Board extends React.Component {

    renderSquare(i) {
      const x = i % 8;
      const y = Math.floor(i / 8);
      const black = (x + y) % 2 === 1;

      const [knightX, knightY] = this.props.knightPosition;
      const piece = (x === knightX && y === knightY) ?
        <CS.Knight /> :
        null;

      return (
        <div key={i}
           style={{ width: '12.5%', height: '12.5%' }}>
          <CS.Square black={black}>
            {piece}
          </CS.Square>
        </div>
      );
  }

    render() {
      const squares = [];
      for (let i = 0; i < 64; i++) {
        squares.push(this.renderSquare(i));
      }

      return <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {squares}
      </div>
    }

  }

  CS.Board = Board;
})()

if (window.CS === undefined) { window.CS = {}; }

(() => {

  class Knight extends React.Component {
    render() {
      return <span>♘</span>;
    }
  }

  CS.Knight = Knight;
})()

if (window.CS === undefined) { window.CS = {}; }

(() => {

  let knightPosition = [0, 0];
  let observer = null;

  function emitChange() {
    observer(knightPosition);
  }

  window.CS.StateController = {
    observe: function (receive) {
      setInterval(() => receive([
        Math.floor(Math.random() * 8),
        Math.floor(Math.random() * 8)
      ]), 500);
    }

  }

})()

if (window.CS === undefined) { window.CS = {}; }

(() => {

  class Square extends React.Component {
    render() {
      const { black } = this.props;
      const fill = black ? 'black' : 'white';
      const stroke = black ? 'white' : 'black';

      return <div style={{ backgroundColor: fill,
        color: stroke,
        width: '100%',
        height: '100%'}}>
          {this.props.children}
        </div>;
    }
  }

  CS.Square = Square;
})()

import React from 'react';
import ReactDOM from 'react-dom';

var mountNode = document.querySelector('#react-root');

CS.StateController.observe(knightPosition =>
  ReactDOM.render(
    <CS.Board knightPosition={knightPosition} />, mountNode)
);

// ReactDOM.render(<CS.Board knightPosition={[0, 0]}/>, mountNode);
