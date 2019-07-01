// jshint esversion : 6
const flatten = require('../flatten');
const assertArraysEqual = require('./eqArraysLogger');

assertArraysEqual(flatten([1, 2, [3, [[[[4]] , 5]]], 6, [7, 8, 9, 10]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assertArraysEqual(flatten(["1", ["2", ["3"]]]), ["1", "2", "3"]);