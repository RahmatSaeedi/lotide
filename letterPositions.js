// Returns an object, containing all the indices in the string where each character is found. Indicies are zero-based.
// jshint esversion : 6

const letterPositions = function(str) {
  let out = {};
  
  str.split('').forEach(letter => {
    out[letter] = [];
  });

  for (let i = 0; i < str.length; i++) {
    out[str[i]].push(i);
  }

  return out;
};


module.exports = letterPositions;