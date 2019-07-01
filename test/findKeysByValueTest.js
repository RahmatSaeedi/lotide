// jshint esversion : 6
const findKeysByValue = require('./findKeysByValue');
const eqArrays = require('../eqArrays');


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion Failed: values or types don't match, ${array1} !== ${array2}`);
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  drama2:  "The Wire"
};


assertArraysEqual(findKeysByValue(bestTVShowsByGenre, "The Wire"),[ 'drama', 'drama2' ]);
assertArraysEqual(findKeysByValue(bestTVShowsByGenre, "That '70s Show"),[]);