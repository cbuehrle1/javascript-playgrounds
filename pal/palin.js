function isPalindrome (input) {

  var inputArr = input.split('');
  var outputArr = []

  inputArr.forEach((item) => {
    outputArr.unshift(item);
  });

  var output = outputArr.join('');

  if (input == output) {
    return true;
  }
  else {
    return false;
  }

}

var result = isPalindrome('racecar');

console.log(result);


function recursivePalindrome (input) {

  var len = input.length

  if (len === 0 || len === 1) {
    console.log(input);
    return true;
  }

  if (input[0] === input[len - 1]) {
    console.log(input);
    return recursivePalindrome(input.slice(1, len - 1) );
  }

  return false;
}

console.log(recursivePalindrome('hannah'));
