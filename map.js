// Returns a new array based on the results of callback function.
// jshint esversion : 6

const map = function(array, callback) {
  let newArray = [];
  array.forEach(
    value => newArray.push(callback(value))
  );
  return newArray;
};

module.exports = map;