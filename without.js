// Will return a subset of a given array, removing unwanted elements.
// jshint esversion : 6

const without = function(sourceArray, itemsToRemoveArray) {
  let newArray = [];

  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] instanceof Object) {
      newArray.push(without(sourceArray[i], itemsToRemoveArray));
    } else if (!itemsToRemoveArray.includes(sourceArray[i])) {
      newArray.push(sourceArray[i]);
    }
  }
  return newArray;
};


module.exports = without;