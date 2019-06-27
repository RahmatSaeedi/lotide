// Converts an input string array to simplified pig-latin
// jshint esversion : 6

// Declares the vowels
const  vowels = ["A", "E", "I", "O", "U"];

// selects the minimum value in a array of numbers
const min = function(array) {
  let _min = array[0];
  array.forEach(v => {
    if (v < _min) {
      _min = v;
    }
  });
  return _min;
};


// simplified pig-latin convertor
const pigLatin = function(_in) {
  let _out = "";

  // If the word starts with a wovel, than just add "yay" ending
  if (vowels.includes(_in[0].toUpperCase())) {

    _out = _in + "yay";

  } else if (_in !== undefined) { // If the word starts with a consonant, than move the consonant group to the end, and add "ay" ending
    let index = [];
    vowels.forEach(v => {
      let i = _in.toUpperCase().indexOf(v);
      if (i > 0) {
        index.push(i);
      }
    });

    _out = _in.slice(min(index)) + _in.slice(0, min(index)) + "ay";
  }

  // Return the word
  return _out.toLowerCase();
};


// Process input arguments
let out = "";
process.argv.slice(2).forEach(_in => {
  out += pigLatin(_in) + " ";
});


//print the resultant sentence
console.log(out);
