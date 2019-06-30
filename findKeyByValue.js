// Searches for a key in an object where its value matches a given value.
// jshint esversion : 6

const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

findKeyByValue.assertFunctionality = function () {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire",
    drama2:  "The Wire"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
};


module.exports = findKeyByValue;