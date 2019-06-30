// Returns a new array based on the results of callback function.
// jshint esversion : 6
const assertArraysEqual = require('./eqArrays').assertArraysEqual;

const map = function(array, callback) {
  let newArray = [];
  array.forEach(
    value => newArray.push(callback(value))
  );
  return newArray;
};


map.assertFunctionality = function() {
  const words = ["ground", "control", "to", "major", "tom"];
  console.log("Testing " + this.name);
  assertArraysEqual(map(words, word => word[0]), ['g','c','t','m','t']);
};

module.exports = map;