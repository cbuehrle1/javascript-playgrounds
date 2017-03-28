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
           style={{ width: '12.5%', height: '12.5%' }} onClick={() => this.handleSquareClick(x, y)}>
          <CS.Square black={black}>
            {piece}
          </CS.Square>
        </div>
      );
    }

    handleSquareClick(toX, toY) {
      if (CS.StateController.canMoveKnight(toX, toY)) {
        CS.StateController.moveKnight(toX, toY);
      }
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

export DragDropContext(HTML5Backend)(CS.Board);
export const ItemTypes = {
  KNIGHT: 'knight' }

if (window.CS === undefined) { window.CS = {}; }

(() => {

  const knightSource = {
    beginDrag(props) {
      return {};
    }
  };

  function collect(connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
    }
  }

  class Knight extends Component {
    render() {
      const { connectDragSource, isDragging } = this.props;
      return connectDragSource(
        <div style={{
          opacity: isDragging ? 0.5 : 1,
          fontSize: 25,
          fontWeight: 'bold',
          cursor: 'move'
        }}>
          ♘
        </div>
      );
    }
  }
  CS.Knight = Knight;
})()

export DragSource(ItemTypes.KNIGHT, knightSource, collect)(CS.Knight);

if (window.CS === undefined) { window.CS = {}; }

(() => {

  let knightPosition = [1, 7];
  let observer = null;

  function emitChange() {
    observer(knightPosition);
  }

  window.CS.StateController = {
    observe: function (o) {
      if (observer) {
        throw new Error('Multiple observers not implemented.');
      }

      observer = o;
      emitChange();

    },

    moveKnight: function (toX, toY) {
      knightPosition = [toX, toY];
      emitChange();
    },

    canMoveKnight(toX, toY) {
      const [x, y] = knightPosition;
      const dx = toX - x;
      const dy = toY - y;

      return (Math.abs(dx) === 2 && Math.abs(dy) === 1) || (Math.abs(dx) === 1 && Math.abs(dy) === 2);
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
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


var mountNode = document.querySelector('#react-root');

CS.StateController.observe(knightPosition =>
  ReactDOM.render(
    <CS.Board knightPosition={knightPosition} />, mountNode)
);

// ReactDOM.render(<CS.Board knightPosition={[0, 0]}/>, mountNode);
