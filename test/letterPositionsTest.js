// jshint esversion : 6
const letterPositions = require('../letterPositions');
const eqArrays = require('../eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion Failed: values or types don't match, ${array1} !== ${array2}`);
  }
};

const result1 = letterPositions("hello hehehe");
assertArraysEqual(result1.h, [ 0, 6, 8, 10 ]);
assertArraysEqual(result1.e, [ 1, 7, 9, 11 ]);
assertArraysEqual(result1.l, [ 2, 3 ]);
assertArraysEqual(result1.o, [ 4 ]);
assertArraysEqual(result1[' '], [ 5 ]);