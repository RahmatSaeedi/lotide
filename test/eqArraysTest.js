// jshint esversion : 6
const assertArraysEqual = require('./eqArraysLogger');

assertArraysEqual([1, [2, 3]], [1, [2, 3]]);
assertArraysEqual(["1", ["2"], "3"], ["1", ["2"], "3"]);
