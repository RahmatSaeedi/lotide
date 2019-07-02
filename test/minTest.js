// jshint esversion : 6
const min = require('../min');
const assert = require('chai').assert;

describe('#min', () => {
  const testArray1 = [5, 7, 8, 2, 4, 10, 8, 1, 54, 13];
  const result1 = min(testArray1);
  const expectedResult1 = 1;
  
  const testArray2 = [5, 7, 2, 4, 0];
  const result2 = min(testArray2);
  const expectedResult2 = 0;

  const testArray3 = [-5, -7, -8, -2, -4, -10, -8, -1];
  const result3 = min(testArray3);
  const expectedResult3 = -10;

  const testArray4 = [-5, -7, -2, -4, -0, 0];
  const result4 = min(testArray4);
  const expectedResult4 = -7;

  const testArray5 = [5, 7, -8, 2, 4, 0, 8, -1, 54, 13];
  const result5 = min(testArray5);
  const expectedResult5 = -8;


  it("returns correct output for all positive valued array",()=>{
    assert.strictEqual(result1,expectedResult1);
    assert.strictEqual(result2,expectedResult2);
  });
  it("returns correct output for all negative valued array",()=>{
    assert.strictEqual(result3,expectedResult3);
    assert.strictEqual(result4,expectedResult4);
  });
  it("returns correct output for mixed valued array",()=>{
    assert.strictEqual(result5,expectedResult5);
  });
});
