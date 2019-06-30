// Will return a subset of a given array, removing unwanted elements.
// jshint esversion : 6
const assertArraysEqual = require('./eqArrays').assertArraysEqual;

const without = function(sourceArray, itemsToRemoveArray) {
  let newArray = [];

  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] instanceof Object) {
      newArray.push(without(sourceArray, itemsToRemoveArray));
    } else if (!itemsToRemoveArray.includes(sourceArray[i])) {
      newArray.push(sourceArray[i]);
    }
  }
  return newArray;
};


without.assertFunctionality = function() {
  console.log("Testing " + this.name);
  
  assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
  assertArraysEqual(without([1, 2, 1, 3, 1], [1]), [2, 3]);
  assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
};


module.exports = without;