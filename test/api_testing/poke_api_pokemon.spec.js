const supertest = require('supertest');
const expect = require('chai').expect;

const bulbasaur = require('./bulbasaur.json');

describe(`Let's learn more about bulbasaur`, function () {
  it('should have a name bulbasaur', function () {
    expect(bulbasaur).to.have.property('name', 'bulbasaur');
  });
});
