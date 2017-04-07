

describe('Intro to variables, operators, and functions', function() {

  describe('Variables', function() {
    t('Variables hold things, like numbers.', function() {
      //Unless you put something in it, a variable will be undefined.
      //So assign the value 4 to the variable.
      var val;
      chai.assert.equal(val, 4);
    });

    t('Variables hold things, like strings.', function() {
      var val;
      chai.assert.equal(val, 'hello');
    });

  });

  describe('Operators', function() {

    describe('Combining', function() {
      t('You can combine variables and values with operators.', function() {
        //Add four to this variable.
        var val = 6;
        chai.assert.equal(val, 10);
      });

      t('When using operators, the "type" of the value matters.', function() {
        var val1 = 5;
        //Add 5 to val1

        var val2 = '5';
        //Add 5 to val2

        var val3 = '5';
        //Sutract 5 from val3

        chai.assert.equal(val1, 10);
        chai.assert.equal(val2, '55');
        chai.assert.equal(val3, 0);
      });
    });

    describe('Determining Truthiness', function() {
      t('The equal (==) and threequal (===) operators are for determining equality truthiness.', function() {

        var name = 'Bob';

        var result;
        //Use two equal signs to check if name equals 'Bob', and put that in the result.
        //Change that to two equal signs. Notice that there is no difference.

        chai.assert.equal(result, true);
      });

      t('Sometimes there is a difference between the equals and threequals operators.', function() {

        var result = 5 === '5';
        //turn that into an equals

        chai.assert.equal(result, true);
      });

      t('The less than (<) and greater than (>) operators can be used in ways that you expect.', function() {

        var result;
        //Assign the value of 5 < 10
        chai.assert.isTrue(result1);

        var result2;
        //Assign the value of 5 > 10
        chai.assert.isFalse(result2);
      });

      t('The && operator can be used to combine two (or more) truthy checks.', function() {
        var name = 'Eric';
        var age = 41;

        //If the name is 'Eric' and the age is 20, assign true to the variable `result`.
        var result;
        chai.assert.isFalse(result);
      });

      t('The || operator can be used to combine two (or more) truthy checks for an "or" check.', function() {
        var name = 'Eric';
        var age = 41;

        //If the name is 'Eric' or the age is 41, assign true to the variable `result`.
        var result;
        chai.assert.isTrue(result);
      });
    });

  });

  describe('Functions', function() {
    t('Functions are for grouping code.', function() {

      function doSomething() {
        console.log('This function is running.');
      }

      //Execute the function
      doSomething();

      //There is no value to check here because this function has no output.
    });

    t('Functions can take inputs and return outputs.', function() {

      function doWeirdMathCombo(input) {
        var output;
        //Multiply the input by 5 then divide it by 2.
        return output;
      }

      var result = doWeirdMathCombo(7);
      chai.assert.equal(result, 17.5);
    });

    t('Functions can use variables outside of them.', function() {

      var value = 0;
      chai.assert.equal(value, 0);

      function increment() {
        //You should do something here
      }

      //Call the function here
      increment();
      chai.assert.equal(value, 1);

      //Call it again here.
      increment();
      chai.assert.equal(value, 2);

    });

    t('If a variable is created inside a function, nothing can access it outside.', function() {

      function doThing() {
        var insideValue = 5;
        return insideValue;
      }

      //That won't work. Instead, assign the return value of the function to `outsideValue`.
      var outsideValue = insideValue;

      chai.assert.equal(outsideValue, 5);
    });
  });

});
