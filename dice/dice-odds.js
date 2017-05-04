var dice1 = [1, 2, 3, 4, 5, 6]
var dice2 = [1, 2, 3, 4, 5, 6]
var resultingOdds = []
var count = 0

function diceOdds (dice1, dice2) {

  dice1.forEach((face) => {

    dice2.forEach((face2) => {
      count++;
      var result = face + face2;
      resultingOdds.push(result);
    });

  });

}

function calculate (array) {

  var counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  array.forEach((num) => {
    counter[num - 2]++
  });

  var odds = {
    two: counter[0] / count,
    three: counter[1] / count,
    four: counter[2] / count,
    five: counter[3] / count,
    six: counter[4] / count,
    seven: counter[5] / count,
    eight: counter[6] / count,
    nine: counter[7] / count,
    ten: counter[8] / count,
    eleven: counter[9] / count,
    tweleve: counter[10] / count
  }

  console.log(odds);

}

diceOdds(dice1, dice2);
calculate(resultingOdds);
