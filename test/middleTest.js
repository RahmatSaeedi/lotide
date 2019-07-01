// jshint esversion : 6
const middle = require('../middle');
const assertArraysEqual = require('./eqArraysLogger');

// Case 1 or 2 elements
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
// Case odd number of elements
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// Case even number of elements
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
