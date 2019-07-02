// jshint esversion : 6
const flatten = require('../flatten');
const expect = require('chai').expect;

describe("#flatten", () => {
  const result1 = flatten([1, 2, [3, [[[[4]] , 5]]], 6, [7, 8, 9, 10]]);
  const expectedResult1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result2 = flatten(["1", ["2", ["3"]]]);
  const expectedResult2 = ["1", "2", "3"];

  it("returns the correct array for integer-valued values", () => {
    expect(result1).to.eql(expectedResult1);
  });
  it("returns the correct keys for string-valued values", () => {
    expect(result2).to.eql(expectedResult2);
  });
});