describe('String Challenge ', function() {

  challenge('Implement this function that strips all punctuation from a string.', function() {

    var str = 'Yes, just the five. Husbands should be like Kleenex: soft, strong and disposable.';
    var result = stripPuncutation(str);

    chai.assert.equal(result, 'Yes just the five Husbands should be like Kleenex soft strong and disposable');

  });

  challenge('Implement this function that reverses a string.', function() {
    var str = 'Reverse me';
    var result = stringReverser(str);

    chai.assert.equal(result, 'em esreveR');
  });

  challenge('Implement this function to truncate a sentence to fifteen letters but add ellipses.', function() {
    var sentence = 'Captain America: Civil War was basically the best movie ever.';

    var result = truncate(sentence);

    chai.assert.equal(result, 'Captain America...');
  });

  challenge('Implement this function to truncate a sentence to the specified number of letters and add ellipses.', function() {
    var sentence = 'Gone Fishin with Danny Glover and Joe Pesci was possibly the worst movie I have ever eeen.';

    var result = truncateByCount(sentence, 10);
    chai.assert.equal(result, 'Gone Fishi...');

    var result = truncateByCount(sentence, 20);
    chai.assert.equal(result, 'Gone Fishin with Dan...');
  });

  challenge('Implement this function that will capitalize every other letter in the string, starting with the first.', function() {
    //Hint: You might find the modulo operator handy.
    var str = 'Symmetrical book stacking';
    var result = capitalizeEveryOtherLetter(str);

    chai.assert.equal(result, 'SyMmEtRiCaL BoOk sTaCkInG');
  });

});
