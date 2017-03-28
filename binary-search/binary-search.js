

function binarySearch (input, max) {

  var num = max;
  var setNum = max / 2;

  while (setNum != input) {

    if (setNum > input) {
      setNum = Math.round(setNum / 2);
    }
    else if (setNum < input) {
      setNum = Math.round(setNum * 1.5);
    }

    console.log(setNum);
  }

  console.log('search complete ' + setNum);

}

// binarySearch (99, 100);

function betterSearch (input, max, min) {

  var high = max;
  var low = min;
  var guess = high / 2;

  while (guess != input) {

    console.log(guess);

    if (input > guess) {
      var low = guess;
      var guess = Math.round(((high - low) / 2) + low);
    }
    else if (input < guess) {
      var high = guess;
      var guess = Math.round(((high - low) / 2) - low);
    }


  }

  console.log('Guessed Correct ' + guess);
}

betterSearch(521, 1000, 0);
