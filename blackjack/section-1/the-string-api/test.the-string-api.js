

describe('Strings are like arrays so', function() {

  factoid('you can get the number of letters by using the `length` property.', function() {

    var str = 'Jack smote the wicked dragon mightily with a wet fish.';

    var length;

    chai.assert.equal(length, 54);
  });

  factoid('you can loop through them and do things like collect all the vowels.', function() {
    var str = 'Jack smote the wicked dragon mightily with a wet fish.';

    var theVowels = '';

    chai.assert.equal(theVowels, 'aoeeieaoiiiaei');
  });

  describe('you can use `indexOf` to get location of', function() {

    factoid('a letter. If it exists, the number will be zero or greater.', function() {

      var str = 'Jack smote the wicked dragon mightily with a wet fish.'

      var indexOfW;

      chai.assert.equal(indexOfW, 15);
    });

    factoid('a word. If it exists, the number will be zero or greater.', function() {

      var str = 'Jack smote the wicked dragon mightily with a wet fish.'

      var indexOfDragon;

      chai.assert.equal(indexOfDragon, 22);
    });

    factoid('a letter. If it does not exist, the number will be -1.', function() {

      var str = 'Jack smote the wicked dragon mightily with a wet fish.'

      var indexOfZ;

      chai.assert.equal(indexOfZ, -1);
    });

  });

});

describe('Strings', function() {

  factoid('can be converted to uppercase.', function() {
    var str = 'hello';

    var result;

    chai.assert.equal(result, 'HELLO');
  });

  factoid('can be converted to lowercase.', function() {
    var str = 'HELLO';

    var result;

    chai.assert.equal(result, 'hello');
  });

  factoid('can be split based on a delimiter.', function() {
    var str = 'Bob,Smith,54,2304 Main St,Dallas,TX,76543';

    var city;

    chai.assert.equal(city, 'Dallas');
  });

  factoid('have a substr function for selecting a subset of the string.', function() {
    var str = 'Jack smote the wicked dragon mightily with a wet fish.';

    //`substr` takes two arguments, the index to start with the length to select.
    var sub;

    chai.assert.equal(sub, 'wicked');
  });

  factoid('have a substring function for selecting a subset of the string.', function() {
    var str = 'Jack smote the wicked dragon mightily with a wet fish.';

    //`substring` takes two arguments, the index to start and the index to end the selection.
    var sub;

    chai.assert.equal(sub, 'wicked');
  });

});
