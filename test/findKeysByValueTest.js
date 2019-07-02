// jshint esversion : 6
const expect = require('chai').expect;
const findKeysByValue = require('../findKeysByValue');


describe("#findKeysByValue", () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire",
    drama2:  "The Wire",
    9: 12,
    10: 12,
    8: [1,2]
  };
  it("returns the correct keys for string-valued values", () => {
    expect(findKeysByValue(bestTVShowsByGenre, "The Wire")).to.eql([ 'drama', 'drama2' ]);
  });
  it("returns the correct keys for integer-valued values", () => {
    expect(findKeysByValue(bestTVShowsByGenre, 12)).to.eql([ '9', '10' ]);
  });
  it("returns '[]' if values is not in the object", () => {
    expect(findKeysByValue(bestTVShowsByGenre, 'nonExistantValue')).to.eql([]);
  });
});
