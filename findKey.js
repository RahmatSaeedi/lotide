// This method returns the key of the first element predicate returns truthy. Predicate takes (object[key], key, object).
// jshint esversion : 6
const assertEqual = require('./assertEqual');

const findKey = function(object, predicate) {
  for (let key in object) {
    if (predicate(object[key], key, object)) {
      return key;
    }
  }
};


findKey.assertFunctionality = function() {
  let ans = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2);

  assertEqual(ans, 'noma');
};

module.exports = findKey;