process.stdin.resume();
process.stdin.setEncoding('utf8');

var currentPlayer = true;
var constants = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'];

var pOne = {
  symbol: 'X',
  moves: []
}

var pTwo = {
  symbol: 'O',
  moves: []
}

var board = {
  rowA: {
    A1: ' ',
    A2: ' ',
    A3: ' ',
  },
  rowB: {
    B1: ' ',
    B2: ' ',
    B3: ' ',
  },
  rowC: {
    C1: ' ',
    C2: ' ',
    C3: ' '
  }
}

function renderBoard () {
  console.log('| ' + board.rowA.A1 + ' | ' + board.rowA.A2 + ' | ' + board.rowA.A3 + ' |');
  console.log('| ' + board.rowB.B1 + ' | ' + board.rowB.B2 + ' | ' + board.rowB.B3 + ' |');
  console.log('| ' + board.rowC.C1 + ' | ' + board.rowC.C2 + ' | ' + board.rowC.C3 + ' |');
}

function firstBoard () {
  console.log('| A1 | A2 | A3 |');
  console.log('| B1 | B2 | B3 |');
  console.log('| C1 | C2 | C3 |');
}

function moveSubmitted (move, player) {

  console.log('MOVE SUBMITTED');

  var textParse = move.split('');
  var row = textParse[0];
  var col = textParse[1];

  if (row === 'A') {

    for (var key in board.rowA) {

      if (key === move) {
        var thePlayer = whoseTurn(currentPlayer);
        board.rowA[key] = thePlayer.symbol;
        thePlayer.moves.push(move);
      }

    }
  }
  else if (row === 'B') {

    for (var key in board.rowB) {

      if (key === move) {
        var thePlayer = whoseTurn(currentPlayer);
        board.rowB[key] = thePlayer.symbol;
        thePlayer.moves.push(move);
      }

    }
  }
  else if (row === 'C') {

    for (var key in board.rowC) {

      if (key === move) {
        var thePlayer = whoseTurn(currentPlayer);
        board.rowC[key] = thePlayer.symbol;
        thePlayer.moves.push(move);
      }

    }
  }

}

function whoseTurn (player) {

  if (player) {
    currentPlayer = false;
    return pOne;
  }
  else {
    currentPlayer = true;
    return pTwo;
  }

}

console.log('WELCOME TO CHADS TIC TAC TOE');
console.log('');
console.log('ENTER THE SPOT TO MOVE, SEE SPOTS BELOW');
console.log('');
firstBoard();
console.log('');

process.stdin.on('data', function (text) {

  if (text === 'quit') {
    done();
  }

  var lines = text.split("\n");

  constants.forEach((item) => {

    if (item !== lines[0]) {
      console.log('no match');
    }

  });

  moveSubmitted(lines[0]);
  renderBoard();
  console.log(pOne.moves);
  console.log(pTwo.moves);

});

function done() {
  console.log('game ended');
  process.exit();
}
