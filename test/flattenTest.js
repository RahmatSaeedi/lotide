// jshint esversion : 6
const flatten = require('./flatten');
const eqArrays = require('./eqArrays');


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion Failed: values or types don't match, ${array1} !== ${array2}`);
  }
};



assertArraysEqual(flatten([1, 2, [3, [[[[4]] , 5]]], 6, [7, 8, 9, 10]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assertArraysEqual(flatten(["1", ["2", ["3"]]]), ["1", "2", "3"]);