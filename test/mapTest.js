// jshint esversion : 6
const map = require('../map');
const expect = require('chai').expect;

describe('#map', () => {
  const words = ["ground", "control", "to", "major", "tom"];
  const result = map(words, word => word[0]);
  const expectedResult = ['g','c','t','m','t'];

  it("returns correct output",()=>{
    expect(result).to.eql(expectedResult);
  });
});