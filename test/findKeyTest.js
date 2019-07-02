
// jshint esversion : 6
const assert = require('chai').assert;
const findKey = require('../findKey');
describe("#findKey", () => {
  const result = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2);

  const result2 = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 100);

  it("returns the correct key", () => {
    assert.strictEqual(result, 'noma');
  });
  it("returns 'undefined' if none-matches", () => {
    assert.strictEqual(result2, undefined);
  });
});
