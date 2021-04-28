const supertest = require('supertest');
const expect = require('chai').expect;

const baseUrl = supertest('https://pokeapi.co');
const apiEndPoint = '/api/v2/pokemon/1';

let response;
let bulbasaur;

const callPokeApi = async function (requestBody) {
  return baseUrl
    .get(apiEndPoint)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .send(requestBody);
};
describe(`Let's learn more about bulbasaur`, function () {
  before(async function () {
    response = await callPokeApi();
    bulbasaur = response.body;
  });

  it('status code is 200', function () {
    expect(response.status).to.equal(200);
  });
});
