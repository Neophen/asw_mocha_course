process.env.NODE_ENV = 'test';
const chai = require('chai');
const expect = chai.expect;

describe('Alnasoft unit testing course', function () {
  it('should make sure that everyone has finished setting up their system', function () {
    return true;
  });

  it('should show a correct welcome message', function () {
    expect('welcdfasome to the course').to.be.eq('Welcome to the course');
  });

  it.only('object should match structure', function () {
    const peopleObj = { people: ['Inga', 'Vita', 'Sandra', 'Gytis', 'Agne'] };

    expect(peopleObj).to.have.property('people');
    expect(peopleObj.people).to.include('Vita');
    expect(peopleObj.people).to.not.include('Mykolas');
  });
});
