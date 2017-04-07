

describe('Blackjack', function() {
  describe('countCards', function() {

    //NTK: Array iteration
    it('should return 14 when given 10 and 4.', function() {
      var card1 = { suit: 'H', number: 10 };
      var card2 = { suit: 'S', number: 4 };

      var cards = [card1, card2];

      chai.assert.equal(14, countCards(cards));
    });

    //NTK: conditionals
    it('should return 13 with 3 and face card.', function() {
      var cards = [
        { suit: 'H', number: 'Q' },
        { suit: 'H', number: 3 }
      ]

      chai.assert.equal(13, countCards(cards));
    });

    it('should return 19 with 10, 4, and 5 cards.', function() {
      var cards = [
        { suit: 'H', number: 10 },
        { suit: 'C', number: 4 },
        { suit: 'D', number: 5 }
      ]

      chai.assert.equal(19, countCards(cards));
    });

    //NTK: Conditional with greater than
    it('should return 21 with A and face card.', function() {
      var cards = [
        { suit: 'H', number: 'A' },
        { suit: 'D', number: 'J' }
      ];

      chai.assert.equal(21, countCards(cards));
    });

    it('should return 17 with 6, face card, and A.', function() {
      var cards = [
        { suit: 'H', number: 'A' },
        { suit: 'D', number: 'J' },
        { suit: 'C', number: 6 }
      ];

      chai.assert.equal(17, countCards(cards));
    });

    it('should return 14 with two aces and a 2', function() {
      var cards = [
        { suit: 'H', number: 'A' },
        { suit: 'D', number: 'A' },
        { suit: 'C', number: 2 }
      ];

      chai.assert.equal(14, countCards(cards));
    });

  });
});
