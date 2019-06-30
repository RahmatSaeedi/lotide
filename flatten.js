// Given an array with other arrays inside, this function can flatten it into a single-level array.
// jshint esversion : 6
const assertArraysEqual = require('./eqArrays').assertArraysEqual;

const flatten = function(sourceArray) {
  let newArray = [];

  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] instanceof Array) {
      Array.prototype.push.apply(newArray, flatten(sourceArray[i]));
    } else {
      newArray.push(sourceArray[i]);
    }
  }
  return newArray;
};


flatten.assertFunctionality = function() {
  assertArraysEqual(flatten([1, 2, [3, [[[[4]] , 5]]], 6, [7, 8, 9, 10]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  assertArraysEqual(flatten(["1", ["2", ["3"]]]), ["1", "2", "3"]);
};

module.exports = flatten;