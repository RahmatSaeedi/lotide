// jshint esversion : 6
const without = require('../without');
const expect = require('chai').expect;


describe('#without', () => {

  const results1 = without([1, "2", 3], [1]); 
  const expectedResult1 = ["2", 3];

  const results2 = without([1, ["2", [1], 3], 1, 5], [1, "2"]);
  const expectedResult2 = [ [ [], 3 ], 5 ];

  const results3 = without([], [1, "9"]);
  const expectedResult3 = [];


  it("returns the correct output for flat premitive-valued input-arrays",()=>{
    expect(results1).to.eql(expectedResult1);
  });
  it("returns the correct output for nested-premitive-valued input-arrays",()=>{
    expect(results2).to.eql(expectedResult2);
  });
  it("returns an empty array for an empty input-array",()=>{
    expect(results3).to.eql(expectedResult3);
  });
});
