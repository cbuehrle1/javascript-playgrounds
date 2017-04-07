

describe('Intro to variables, operators, and functions', function() {

    t('create a function that returns the number "4".', function() {
      var result = returns4();
      chai.assert.equal(result, 4);
    });

    t('create a function that returns the string "hello world!"', function() {
      var result = hello();
      chai.assert.equal(result, 'hello world');
    });

    t('create a function that doubles any number passed in.', function() {
      var result = double(4);
      chai.assert.equal(result, 8);
    })

    t('create a function that will add any two numbers.', function() {
      var result = add(2, 4);
      chai.assert.equal(result, "6");
    });

    t('create a function that will combine two strings.', function() {
      var result = combineStrings('hello', 'world');
      chai.assert.equal(result, 'hello world');
    });

    t('create a function that subtracts two numbers.', function() {
      var result = subtract(5, 2);
      chai.assert.equal(result, 3);
    });

    t('create a function that will multiply two numbers.', function() {
      var result = multiply(2, 20);
      chai.assert.equal(result, 40);
    });

    t('create a function that will divide two numbers.', function() {
      var result = divide(20, 5);
      chai.assert.equal(result, 4);
    });

    t('create a function that will get the remainder of a division.', function() {
      var result = remainder(21, 5);
      chai.assert.equal(result, 1);
    });

    t('create a function that will square a number.', function() {
      var result = square(80);
      chai.assert.equal(result, 6400);
    });

    t('create a function that will cube a number.', function() {
      var result = cube(3);
      chai.assert.equal(result, 27);
    });
});
