//In this activity, you will have to look at some documentation and figure out the format!

describe('HL7', function() {

  describe('PID parser', function() {

    //You might find this page useful: https://corepointhealth.com/resource-center/hl7-resources/hl7-pid-segment

    var pid = 'PID|||PATID1234^5^M11||JONES^WILLIAM^A^III||19610615|M-||C|1200 N ELM^STREET^^GREENSBORO^NC^27401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10|123456789|9-87654^NC';

    it('can return the name.', function() {
      var name = PIDParser.name(pid);
      chai.assert.equal(name, 'JONES^WILLIAM^A^III');
    });

    it('can return the year of birth.', function() {
      var birthYear = PIDParser.birthYear(pid);
      chai.assert.equal(birthYear, 1961);
    });

    it('can return the month of birth.', function() {
      var birthMonth = PIDParser.birthMonth(pid);
      chai.assert.equal(birthMonth, 6);
    });

    //TODO: Write a test for the birth day.
  });

  describe('MSH parser', function() {

    //You might find this page useful: https://corepointhealth.com/resource-center/hl7-resources/hl7-msh-message-header

    var msh = 'MSH|^~\&|ADT1|MCM|LABADT|MCM|198808181126|SECURITY|ADT^A01|MSG00001-|P|2.3EVN|A01|198808181123';

    it('can return the message type.', function() {
      var type = MSHParser.type(msh);

      chai.assert.equal(type, 'ADT^A01');
    });

    it('can return the sending application.', function() {
      var application = MSHParser.sendingApplication(msh);
      chai.assert.equal(application, 'ADT1');
    });

    it('can return the sending facility.', function() {
      var facility = MSHParser.sendingFacility(msh);
      chai.assert.equal(facility, 'MCM');
    });

    //TODO: Write the test for getting the receiving application.

    //TODO: Write the test for getting the receiving facility.

  });

});
