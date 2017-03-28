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
