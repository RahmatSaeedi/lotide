// jshint esversion : 6
const without = require('../without');
const assertArraysEqual = require('./eqArraysLogger');


assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without([1, 2, 1, 3, 1], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);