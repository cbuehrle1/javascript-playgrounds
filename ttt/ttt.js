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

function inputValidate (input) {

  var result = false;

  constants.forEach((item) => {

    if (input == item) {
      result = true;
    }

  });

  pOne.moves.forEach((item) => {

    if (input == item) {
      result = false;
    }

  });

  pTwo.moves.forEach((item) => {

    if (input == item) {
      result = false;
    }

  });

  return result;

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

function determineIfWinner () {
  var letters;
  var numbers;
  var allOne = 0;
  var answerCounter = {
    letters: {
      A: 0,
      B: 0,
      C: 0
    },
    numbers: {
      One: 0,
      Two: 0,
      Three: 0
    }
  }

  pOne.moves.forEach((position, index) => {

    var parsedPosition = position.split('');
    var row = parsedPosition[0];
    var col = parsedPosition[1];

    if (index === 0) {
      letters = row;
      numbers = col;
    }
    else {
      letters = letters + row;
      numbers = numbers + col;
    }

  });

  for (var i = 0; i < letters.length; i++) {
    if (letters[i] == 'A') {
      answerCounter.letters.A++;
    }
    else if (letters[i] == 'B') {
      answerCounter.letters.B++;
    }
    else {
      answerCounter.letters.C++;
    }
  }

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] == '1') {
      answerCounter.numbers.One++;
    }
    else if (numbers[i] == '2') {
      answerCounter.numbers.Two++;
    }
    else {
      answerCounter.numbers.Three++;
    }
  }

  for (var key in answerCounter) {

    for (var prop in answerCounter[key]) {
      if (answerCounter[key][prop] == 1) {
        allOne++;
      }
    }

  }

  for (var key in answerCounter.letters) {
    if (answerCounter.letters[key] == 3) {
      return 'PLAYER ONE';
    }
  }

  for (var key in answerCounter.numbers) {
    if (answerCounter.numbers[key] == 3) {
      return 'PLAYER ONE';
    }
    else if (allOne == 6) {
      return 'PLAYER ONE'
    }
  }

  letters;
  numbers;
  allOne = 0;
  answerCounter = {
    letters: {
      A: 0,
      B: 0,
      C: 0
    },
    numbers: {
      One: 0,
      Two: 0,
      Three: 0
    }
  }

  pTwo.moves.forEach((position, index) => {

    var parsedPosition = position.split('');
    var row = parsedPosition[0];
    var col = parsedPosition[1];

    if (index === 0) {
      letters = row;
      numbers = col;
    }
    else {
      letters = letters + row;
      numbers = numbers + col;
    }

  });

  for (var i = 0; i < letters.length; i++) {
    if (letters[i] == 'A') {
      answerCounter.letters.A++;
    }
    else if (letters[i] == 'B') {
      answerCounter.letters.B++;
    }
    else {
      answerCounter.letters.C++;
    }
  }

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] == '1') {
      answerCounter.numbers.One++;
    }
    else if (numbers[i] == '2') {
      answerCounter.numbers.Two++;
    }
    else {
      answerCounter.numbers.Three++;
    }
  }

  for (var key in answerCounter) {

    for (var prop in answerCounter[key]) {
      if (answerCounter[key][prop] == 1) {
        allOne++;
      }
    }

  }


  for (var key in answerCounter.letters) {
    if (answerCounter.letters[key] == 3) {
      console.log(pTwo.moves, ' letters');
      return 'PLAYER TWO';
    }
  }

  for (var key in answerCounter.numbers) {
    if (answerCounter.numbers[key] == 3) {
      console.log(pTwo.move, ' numbers');
      return 'PLAYER TWO';
    }
    else if (allOne == 6) {
      console.log(pTwo.moves, ' 6');
      return 'PLAYER TWO';
    }
  }

  return false;

}

function moveSubmitted (move, player) {

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

function gameBoardFull () {
  var counter = 0;

  pOne.moves.forEach((item) => {
    counter++;
  });

  pTwo.moves.forEach((item) => {
    counter++;
  });

  if (counter == 9) {
    return true;
  }
  else {
    return false;
  }

}

console.log('WELCOME TO CHADS TIC TAC TOE');
console.log('');
console.log('ENTER THE SPOT TO MOVE, SEE POSITIONS BELOW');
console.log('');
firstBoard();
console.log('');

process.stdin.on('data', function (text) {

  if (text === 'quit') {
    done();
  }

  var lines = text.split("\n");
  var validator = inputValidate(lines[0]);

  if (validator) {

    moveSubmitted(lines[0]);
    renderBoard();
    var winner = determineIfWinner();
    var catGame = gameBoardFull();

    if (typeof winner == 'string') {
      done(winner + ' WINS!');
    }
    else if (catGame) {
      done('CAT GAME')
    }

  }
  else {
    console.log('BAD TURN. ENTER A POSITION.')
  }
});

function done(message) {
  console.log(message);
  process.exit();
}
