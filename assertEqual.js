// A custom assert function with emoji icons
// jshint esversion: 6


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`🛑  Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

assertEqual.assertFunctionality = function() {
  console.log("Testing " + this.name);
  assertEqual("Bootcamp", "Bootcamp");
  assertEqual(1, 1);
};
module.exports = assertEqual;