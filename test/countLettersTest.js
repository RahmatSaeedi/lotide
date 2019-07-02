// jshint esversion : 6
const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  const result = countLetters('google...');
  it("return['g'] is 2 for input 'google...'", () => {
    assert.strictEqual(result.g, 2);
  });

  it("return['.'] is 3 for input 'google...'", () => {
    assert.strictEqual(result['.'], 3);
  });

});
