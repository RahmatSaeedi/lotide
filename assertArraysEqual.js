// Take in two arrays, asserts that the two are identical, and `console.log` an appropriate message
// Does not work with nested arrays
// jshint esversion : 6
const assertArraysEqual = function(array1, array2) {
  if (array1.length !== array2.length) {
    console.log(`🛑  Assertion Failed: Lengths don't match, ${array1.length} !== ${array2.length}`);
  } else {
    let length = array1.length;
    while (length > 0) {
      length --;
      if (array1[length] !== array2[length]) {
        console.log(`🛑  Assertion Failed: values or types don't match, ${array1[length]} !== ${array2[length]}`);
      }
    }
    console.log(`✅  Assertion Passed: ${array1} === ${array2}`);
  }
};




assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
