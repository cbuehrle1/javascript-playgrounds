

describe('An object can be created', function() {

  t('using object literal syntax.', function() {

    //This person needs a name attribute of 'George Washington' and a gender attribute of 'Male'.
    //Use object literal syntax.
    var person = {};

    chai.assert.equal(person.name, 'George Washington');
    chai.assert.equal(person.gender, 'Male');
  });

  t('with properties added with dot syntax.', function() {

    //This person needs a name attribute of 'George Washington' and a gender attribute of 'Male'.
    //Use dot syntax to assign the attributes.
    var person = {};
    // person.name = 'George Washington';
    // person.gender = 'Male';

    chai.assert.equal(person.name, 'George Washington');
    chai.assert.equal(person.gender, 'Male');
  });

  t('with properties added with string indexing.', function() {

    //This person needs a name attribute of 'George Washington' and a gender attribute of 'Male'.
    //Use string indexing to assign the attributes.
    var person = {};
    // person['name'] = 'George Washington';
    // person['gender'] = 'Male';
    // person['favorite food'] = 'pizza';

    chai.assert.equal(person.name, 'George Washington');
    chai.assert.equal(person.gender, 'Male');
    chai.assert.equal(person['favorite food'], 'pizza');
  });

});


describe('An object', function() {

  t('attribute will return `undefined` if the property does not exist.', function() {
    var person = {
      name: 'George Washington',
      gender: 'Male'
    };

    //TODO: Get a property called "pantSize" from the person object and put it in a variable with the same name.

    chai.assert.equal(pantSize, undefined);
  });

  t('can be looped over with a `for in` loop.', function() {

    var person = {
      name: 'George Washington',
      gender: 'Male'
    };

    var attributes = [];
    var values = [];

    //Loop over the person's attributes using a `for...in` loop and add all key names to the attributes array, and values to the values array.



    //However, the properties won't necessarily be in the order that they are listed in the array literal above. Object values aren't stored in order like array values are.

    chai.assert.equal(attributes.length, 2);
    chai.assert.equal(values.length, 2);
  });

  t('can be thought of like a dictionary.', function() {
    var dict = {};

    // dict['porta'] = 'door';
    // dict['et'] = 'and';
    // dict['magister'] = 'teacher';

    chai.assert.equal(dict['porta'], 'door');
    chai.assert.equal(dict['magister'], 'teacher');

  });

});
