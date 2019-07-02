// jshint esversion : 6
const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');


describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire",
    drama2:  "The Wire",
    9: 12,
    8: [1,2]
  };
  it("returns the correct key for string-valued values", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
  });
  it("returns the correct key for integer-valued values", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 12), '9');
  });
  it("returns 'undefined' if value is not in the object", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});
