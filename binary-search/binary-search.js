

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

function betterSearch (input, max) {


  var high = max;
  var low = 0;
  var guess = high / 2;
  var i = 0;

  while (guess != input) {

    console.log(i);

    if (input > guess) {
      var low = guess;
      var guess = Math.round(((high - low) / 2) + low);
    }
    else if (input < guess) {
      var high = guess;
      var guess = Math.abs(Math.round(((high - low) / 2) - low));
    }

    i++;
  }

  console.log('search complete');
}

betterSearch(521221212113141, 100000000000000000000);
