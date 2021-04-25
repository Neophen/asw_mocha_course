// src/setupTests.js

// import { server } from './mocks/server.js';
const { server } = require('../app/server.js');

exports.mochaHooks = {
  beforeAll() {
    // Establish API mocking before all tests.
    server.listen();
  },
  afterEach() {
    // Reset any request handlers that we may add during the tests,
    // so they don't affect other tests.
    server.resetHandlers();
  },
  afterAll() {
    // Clean up after the tests are finished.
    server.close();
  },
};
