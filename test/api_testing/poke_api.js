const supertest = require('supertest');
const expect = require('chai').expect;

const baseUrl = supertest('https://pokeapi.co');
const apiEndPoint = '/api/v2/pokemon';

let response;
let body;

const callPokeApi = async function (requestBody) {
  return baseUrl
    .get(apiEndPoint)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .send(requestBody);
};

describe(`Poke api basic test`, function () {
  before(async function () {
    response = await callPokeApi();
    body = response.body;
  });

  it('status code is 200', function () {
    expect(response.status).to.equal(200);
  });

  it('should return paginated stucture', function () {
    expect(body).to.have.property('count');
    expect(body).to.have.property('next');
    expect(body).to.have.property('previous');
    expect(body).to.have.property('results');
  });

  it('should return 20 pokemons by default', function () {
    expect(body.results).to.have.a.lengthOf(20);
  });

  it('pokemon should have a name and a path', function () {
    // console.log(body.results [0])
    const pokemon = body.results[0];
    expect(pokemon).to.have.property('name', 'bulbasaur');
    expect(pokemon).to.have.property('url');
  });
});
