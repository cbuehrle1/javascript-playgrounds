

describe('A function for formatting names', function() {

  it('should space-delimit if all three values are present.', function() {
    var result = fullName('Bob', 'Smith', 'H.');
    chai.assert.equal(result, 'Bob H. Smith');
  });

  it('should leave out the middle initial if none is supplied.', function() {
    var result = fullName('Bob', 'Smith');
    chai.assert.equal(result, 'Bob Smith');
  });

  it('should leave out middle initial and last name if not supplied.', function() {
    var result = fullName('Ashurbanipal')
    chai.assert.equal(result, 'Ashurbanipal');
  });

});

describe('A function that will return the smallest number', function() {
  it('should return the first if it is smaller.', function() {
    var result = returnSmaller(5, 10);
    chai.assert.equal(result, 5);
  });

  it('should return the second if it is smaller.', function() {
    var result = returnSmaller(20, 3);
    chai.assert.equal(result, 3);
  })

  it('should return either if they are equal', function() {
    var result = returnSmaller(5, 5);
    chai.assert.equal(result, 5);
  });
});


//You are writing a routine to help the pet shop determine which tank to put the animal in.
describe('Aquatic animal tank determiner function', function() {

  it('should put turtles in the turtle tank', function() {
    var tank = tankDeterminer('turtle', 'large');
    chai.assert.equal(tank, 'turtle');
  });

  it('should put small clown fish into the small saltwater tank', function() {
    var tank = tankDeterminer('clown fish', 'small');
    chai.assert.equal(tank, 'small saltwater');
  });

  it('should put large clown fish into the medium saltwater tank', function() {
    var tank = tankDeterminer('clown fish', 'large');
    chai.assert.equal(tank, 'medium saltwater');
  });

  it('should put small guppies in the small freshwater tank', function() {
    var tank = tankDeterminer('guppy', 'small');
    chai.assert.equal(tank, 'small freshwater');
  });

  it('should put large guppies in the small freshwater tank', function() {
    var tank = tankDeterminer('guppy', 'large');
    chai.assert.equal(tank, 'small freshwater');
  });

});







//be sure to do multiple conditions
