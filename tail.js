// Returns the tail of an array. ie, everything after the first element.
// jshint esversion : 6
const assertEqual = require('./assertEqual');


const tail = function(array) {
  return array.slice(1);
};

tail.assertFunctionality = function() {
  let x = [1, 2, 3, 4];
  let i = 2;
  tail(x).forEach(a => {
    assertEqual(a, i++);
  });
};



module.exports = tail;