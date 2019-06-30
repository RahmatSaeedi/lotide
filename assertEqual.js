// A custom assert function with emoji icons
// jshint esversion: 6
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual.assertFunctionality = function() {
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);
};
module.exports = assertEqual;