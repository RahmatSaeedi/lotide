// Returns the minimum of an array.
// jshint esversion : 6
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const min = function(array) {
  let _min = array[0];
  array.forEach(v => {
    if (v < _min) {
      _min = v;
    }
  });
  return _min;
};

let testArray = [5, 7, -8, 2, 4, 0, 8, -1, 54, 13];
assertEqual(min(testArray), -8);