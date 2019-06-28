// returns an object containing counts of every letter in an input string
// jshint esversion : 6

const countLetters = function(str) {
  let out = {};
  
  str.split('').forEach(e => {
    out[e] = 0;
  });

  str.split('').forEach(letter => {
    out[letter] ++;
  });

  return out;
};
