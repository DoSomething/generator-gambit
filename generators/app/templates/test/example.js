require('dotenv').config();

const assert = require('chai').assert;
const request = require('supertest');

describe('example test', function() {
  it ('should pass the test', function() {
    const foo = 'bar';
    assert.equal(foo, 'bar', 'foo equals bar');
  });
});
