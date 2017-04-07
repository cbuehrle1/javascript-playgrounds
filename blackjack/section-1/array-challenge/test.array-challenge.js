
describe('Array and Loop Challenge ', function() {

  challenge('Implement this function that reverses an array.', function() {
    var arr = ['foo', 'bar', 'baz'];
    var result = arrayReverser(arr);

    chai.assert.deepEqual(result, ['baz', 'bar', 'foo']);
  });

  challenge('Implement this function that sums an array of numbers.', function() {
    var nums = [2, 6, 7, 41, 9];
    var result = sumArrayOfNumbers(nums);

    chai.assert.equal(result, 65);
  });

  challenge('Implement this function that takes an array and returns only the numbers over 10.', function() {
    var nums = [1, 6, 42, 3, 17, 19, 6, 8];
    var result = numbersOver10(nums);

    chai.assert.deepEqual(result, [42, 17, 19]);
  });

  challenge('Implement this function that takes an array and a number that returns the values greater than that number.', function() {
    var nums = [1, 6, 42, 3, 17, 19, 6, 8];
    var result = numbersOverX(nums, 18);

    chai.assert.deepEqual(result, [42, 19]);
  });

  challenge('Implement this function that takes an array and returns all the strongs longer than four letters.', function() {
    var strings = ['nachos', 'steak', 'carp', 'soy', 'chicken'];
    var result = stringsLongerThanFourLetters(strings);

    chai.assert.deepEqual(result, ['nachos', 'steak', 'chicken']);
  });

  challenge('Implement this function that takes an array and a length and returns all the strongs longer than that length.', function() {
    var strings = ['nachos', 'steak', 'carp', 'soy', 'chicken'];
    var result = stringsLongerThanXLetters(strings, 6);

    chai.assert.deepEqual(result, ['chicken']);
  });


});
