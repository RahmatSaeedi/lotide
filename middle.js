// Takes in an array and return the middle-most element(s) of the given array.
// jshint esversion : 6
const assertArraysEqual = require('./eqArrays').assertArraysEqual;

const middle = function(array) {
  let length = array.length;

  if (length < 3) {
    return [];
  } else if (length % 2 === 0) { // even number of elements
    return [array[Math.round(length / 2) - 1], array[Math.round(length / 2)]];

  } else if (length % 2 === 1) { // odd number of elements
    return [array[Math.floor(length / 2)]];
  }
};


middle.assertFunctionality = function() {
  // Case 1 or 2 elements
  console.log("Testing " + this.name);
  assertArraysEqual(middle([1]), []);
  assertArraysEqual(middle([1, 2]), []);
  // Case odd number of elements
  assertArraysEqual(middle([1, 2, 3]), [2]);
  assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
  // Case even number of elements
  assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
  assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
};


module.exports = middle;