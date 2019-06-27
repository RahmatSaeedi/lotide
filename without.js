// Will return a subset of a given array, removing unwanted elements.
// This does not function correctly when using nested arrays or arrays of objects.
// jshint esversion : 6
const without = function(sourceArray, itemsToRemoveArray) {
  let newArray = [];

  for (let i = 0; i < sourceArray.length; i++) {
    if (!itemsToRemoveArray.includes(sourceArray[i])) {
      newArray.push(sourceArray[i]);
    }
  }
  return newArray;
};