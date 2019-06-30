// Returns the head of an array.
// Returns 'undefined' for empty array
// jshint esversion: 6
const assertEqual = require('./assertEqual');

const head = function(array) {
  return array[0];
};


head.assertFunctionality = function() {
  assertEqual(head([5,6,7]), 5);
  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  assertEqual(head([]) , undefined);
};


module.exports = head;