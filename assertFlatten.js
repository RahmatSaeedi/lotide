// Asserts the functionality of flatten.js
// flatten.js: Given an array with other arrays inside, this function can flatten it into a single-level array.
// jshint esversion : 6
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    let length = array1.length;
    while (length > 0) {
      length --;
      if (array1[length] !== array2[length]) {
        return false;
      }
    }
    return true;
  }
};


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion Failed: values or types don't match, ${array1} !== ${array2}`);
  }
};


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


// Should pass all cases
assertArraysEqual(flatten([1, 2, [3, [[[[4]] , 5]]], 6, [7, 8, 9, 10]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assertArraysEqual(flatten(["1", ["2", ["3"]]]), ["1", "2", "3"]);