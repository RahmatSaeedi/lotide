// jshint esversion : 6
const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it("returns 'true' for the same flat-objects with perimitive-values",() => {
    assert.strictEqual(eqObjects({ x: 1, y: 2, z: 'w' },{ x: 1, y: 2, z: 'w' }), true);
  });
  it("returns 'false' for unlike simple flat-objects",() => {
    assert.strictEqual(eqObjects({ x: 5, y: 2, z: 'w' },{ x: 1, y: 2, z: 'w' }), false);
  });
  it("returns 'true' for the same nested-obeject with nested-array values",() => {
    assert.strictEqual(eqObjects({ x: 1, y: {y: 9}, z: 'w' },{ x: 1, y: {y: 9}, z: 'w' }), true);
  });
  it("returns 'true' for the same nested-obeject with nested-array values",() => {
    assert.strictEqual(eqObjects({ x: 1, y: {y: ["2", [3, 7]]}, z: 'w' },{ x: 1, y: {y: ["2", [3, 7]]}, z: 'w' }), true);
  });
});

