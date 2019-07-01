// jshint esversion : 6
const findKeysByValue = require('../findKeysByValue');
const assertArraysEqual = require('./eqArraysLogger');

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  drama2:  "The Wire"
};


assertArraysEqual(findKeysByValue(bestTVShowsByGenre, "The Wire"),[ 'drama', 'drama2' ]);
assertArraysEqual(findKeysByValue(bestTVShowsByGenre, "That '70s Show"),[]);