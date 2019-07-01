// returns an object containing counts of everything that the input object listed
// jshint esversion : 6

const countOnly = function(array, itemsToCount) {
  let out = {};

  for (let key in itemsToCount) {
    if (itemsToCount[key]) {
      array.forEach(e => {
        if (e === key) {
          if (!out[key]) {
            out[key] = 1;
          } else {
            out[key] ++;
          }
        }
      });
    }
  }

  return out;
};


module.exports = countOnly;