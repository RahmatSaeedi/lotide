// jshint esversion : 6
const tail = require('../tail');
const expect = require('chai').expect;

describe('#tail', () => {

  it("returns the correct output for nonempty input-arrays",()=>{
    expect(tail([10, 7, 3, -1])).to.eql([7, 3, -1]);
  });
  it("returns an empty array for empty input-array",()=>{
    expect(tail([])).to.eql([]);
  });
  it("returns an empty array for an array with single element in it",()=>{
    expect(tail([8])).to.eql([]);
  });
});


