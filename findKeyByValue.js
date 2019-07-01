// Searches for a key in an object where its value matches a given value.
// jshint esversion : 6


const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};


module.exports = findKeyByValue;