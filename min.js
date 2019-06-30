// Returns the minimum of an array.
// jshint esversion : 6
const assertEqual = require('./assertEqual');

const min = function(array) {
  let _min = array[0];
  array.forEach(v => {
    if (v < _min) {
      _min = v;
    }
  });
  return _min;
};

min.assertFunctionality = function() {
  let testArray = [5, 7, -8, 2, 4, 0, 8, -1, 54, 13];
  console.log("Testing " + this.name);
  assertEqual(min(testArray), -8);
};

module.exports = min;