// Asserts the functionality of middle.js
// middle.js: Takes in two arrays and returns true or false, based on a perfect match.
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

// Case 1 or 2 elements
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
// Case odd number of elements
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// Case even number of elements
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

