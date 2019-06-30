// Searches for keys in an object where its value matches a given value. Returns an array.
// jshint esversion : 6
const assertArraysEqual = require('./eqArrays').assertArraysEqual;

const findKeysByValue = function(object, value) {
  let out = [];
  
  for (let key in object) {
    if (object[key] === value) {
      out.push(key);
    }
  }

  return out;
};

findKeysByValue.assertFunctionality = function () {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire",
    drama2:  "The Wire"
  };
  
  assertArraysEqual(findKeysByValue(bestTVShowsByGenre, "The Wire"),[ 'drama', 'drama2' ]);
  assertArraysEqual(findKeysByValue(bestTVShowsByGenre, "That '70s Show"),[]);
};


module.exports = findKeysByValue;