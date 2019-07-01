// Given an array with other arrays inside, this function can flatten it into a single-level array.
// jshint esversion : 6

const flatten = function(sourceArray) {
  let newArray = [];

  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] instanceof Array) {
      Array.prototype.push.apply(newArray, flatten(sourceArray[i]));
    } else {
      newArray.push(sourceArray[i]);
    }
  }
  return newArray;
};


module.exports = flatten;