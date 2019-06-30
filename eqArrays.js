// Takes in two arrays and returns true or false, based on a perfect match.
// jshint esversion : 6

const eqArrays = function(array1, array2) {
  if (!(array1 instanceof Array) || !(array2 instanceof Array) || (array1.length !== array2.length)) {
    return false;
  } else {
    let index = array1.length;
    while (index > 0) {
      index --;
      if (array1[index] instanceof Array || array2[index] instanceof Array) {
        if (!eqArrays(array1[index], array2[index])) {
          return false;
        }
      } else if (array1[index] !== array2[index]) {
        return false;
      }
    }
    return true;
  }
};

eqArrays.assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion Failed: values or types don't match, ${array1} !== ${array2}`);
  }
};

eqArrays.assertFunctionality = function() {
  console.log("Testing " + this.name);
  this.assertArraysEqual([1, [2, 3]], [1, [2, 3]]);
  this.assertArraysEqual(["1", ["2"], "3"], ["1", ["2"], "3"]);
};


module.exports = eqArrays;