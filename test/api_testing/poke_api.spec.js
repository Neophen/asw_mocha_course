const supertest = require('supertest');
const expect = require('chai').expect;
const mocha = require('mocha');
const tv4 = require('tv4');
const fs = require('fs');

// const test_data = JSON.parse(fs.readFileSync('./data/movie_test_data.json', 'utf8'));
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

describe(`Book a movie for me`, function () {
  before(async function () {
    response = await callPokeApi();
    body = response.body;
  });

  it('status code is 200', function () {
    console.log(JSON.stringify(body, null, 2));
    // console.log(response);
    expect(response.status).to.equal(200);
  });
});
