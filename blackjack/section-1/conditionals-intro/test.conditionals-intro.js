

describe('Conditionals are for making decisions.', function() {

  factoid('You can use them for one condition.', function() {
    var result;

    if (result === undefined) {
      //uncomment the line below.
      //result = 'stuff';
    }

    chai.assert.equal(result, 'stuff');
  });

  factoid('The condition is about truthiness. If it is truthy, the block will execute', function() {

    var value = 0;
    if (true) {
      value = 1;
    }
    chai.assert.equal(value, 1);

    if ('elephant') {
      value = 2;
    }
    chai.assert.equal(value, 2);

    if (1) {
      value = 3;
    }
    chai.assert.equal(value, 3);
  });

  factoid('If it is falsy, the block will NOT execute', function() {

    var value = 0;
    if (false) {
      value = 1;
    }
    chai.assert.equal(value, 0);

    if ('') {
      value = 1;
    }
    chai.assert.equal(value, 0);

    if (undefined) {
      value = 1;
    }
    chai.assert.equal(value, 0);

    if (0) {
      value = 1;
    }
    chai.assert.equal(value, 0);
  });

  factoid('You can use them for two.', function() {
    var result = 1;

    //uncomment the line of code that will be run.
    if (result === undefined) {
      //result = 100;
    }
    else if (result === 1) {
      //result += 1;
    }

    chai.assert.equal(result, 2);
  });

  factoid('You can have as many "else if"s as you want.', function() {
    //Check in the file `conditionals-intro.js` for this function. You can use it here!

    //In the `describeLetter` function, add an `if` block to return the string 'consonant' if the letter passed in is a 'b'.
    var b = describeLetter('b');
    chai.assert.equal(b, 'consonant');

    //Add an `else if` block to return the string 'vowel' if the letter passed in is a 'a'.
    var a = describeLetter('a');
    chai.assert.equal(a, 'vowel');

    //Add an `else if` block to return the string 'punctuation' if the letter passed in is a period.
    var punc = describeLetter('.');
    chai.assert.equal(punc, 'punctuation');

  });

  factoid('You can have an `else` statement to catch everything else.', function() {
    //In the `describeLetter` function, add an `else` to return the string 'something else' for all unhandled characters.
    var space = describeLetter(' ');
    chai.assert.equal(space, 'something else');
  });

  factoid('You can have multiple conditions in an `if` with ||, and either can be true to go into the block.', function() {
    //Add another condition in the first `if` to check to see if the letter is 'c'.
    var c = describeLetter('c');
    chai.assert.equal(c, 'consonant');
  });

  //You are probably thinking that these aren't particularly robust if checks in `describeLetter`. There are more convenient ways of doing this when you learn more about strings.


  factoid('You can have multiple conditions in an `if` with && but both have to be true to go into the block.', function() {

    //If the person's title is "Mr" and their last name is "Anderson"...you probably get the idea
    var person = identifyPerson('Mr', 'Anderson');
    chai.assert.equal(person, 'The chosen one');

    //Everyone else is less important.
    var person2 = identifyPerson('Mr', 'T');
    chai.assert.equal(person2, 'Some random dude');
  });



});
