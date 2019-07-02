// jshint esversion : 6
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns 'true' for same arrays", () =>{
    assert.strictEqual(eqArrays([1, 7, 3], [1, 7, 3]), true);
  });
  it("returns 'false' for different arrays", () =>{
    assert.strictEqual(eqArrays([1, 5, 3], [1, 7, 3]), false);
  });
  it("returns 'true' for same nested-arrays", () =>{
    assert.strictEqual(eqArrays([1, [2, 3]], [1, [2, 3]]), true);
  });
  it("returns 'true' for same mixed number-string nested-arrays", () =>{
    assert.strictEqual(eqArrays(["1", [[[2], ["3"]]]], ["1", [[[2], ["3"]]]]), true);
  });
});