// jshint esversion : 6
const takeUntil = require('../takeUntil');
const expect = require('chai').expect;

describe('#takeUntil', () => {
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const results1 = takeUntil(data1, x => x < 0);
  const expectedResult1 = [ 1, 2, 5, 7, 2 ];

  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  const results2 = takeUntil(data2, x => x === ',');
  const expectedResult2 = [ "I've", 'been', 'to', 'Hollywood' ];

  it("returns the correct output for integer-valued input-arrays",()=>{
    expect(results1).to.eql(expectedResult1);
  });
  it("returns the correct output for string-valued input-arrays",()=>{
    expect(results2).to.eql(expectedResult2);
  });
  it("returns an empty array for an empty input-array and 'undefined' callback function",()=>{
    expect(takeUntil([], undefined)).to.eql([]);
  });
});
