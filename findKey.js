// This method returns the key of the first element predicate returns truthy. Predicate takes (object[key], key, object).
// jshint esversion : 6

const findKey = function(object, predicate) {
  for (let key in object) {
    if (predicate(object[key], key, object)) {
      return key;
    }
  }
};


module.exports = findKey;