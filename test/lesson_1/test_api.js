process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const server = require('../../server');

chai.use(chaiHttp);

describe('API', function () {
  describe('index', function () {
    it.skip('GET / should an object with a correct message', function (done) {
      chai
        .request(server)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.deep.equal({
            message: 'Welcome to Alnasoft Mocha Chai workshop!',
          });

          done(); // <= Call done to signal callback end
        });
    });
  });
});
