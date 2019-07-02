// jshint esversion : 6
// Should pass all cases
const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "fang",
    "Joe"
  ];

  const countNames = {
    "Jason": true,
    "Karima": true,
    "Fang": true
  };
  
  const result = countOnly(firstNames, countNames);
  it("return correct value", () => {
    assert.strictEqual(result.Jason, 1);
  });
  it("is case sensitive", () => {
    assert.strictEqual(result.Fang, 2);
  });
  it("returns 'undefined' for non-existant keys", () => {
    assert.strictEqual(result.Karima,undefined);
  });
});
