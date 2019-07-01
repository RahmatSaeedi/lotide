// Returns the minimum of an array.
// jshint esversion : 6

const min = function(array) {
  let _min = array[0];
  array.forEach(v => {
    if (v < _min) {
      _min = v;
    }
  });
  return _min;
};


module.exports = min;