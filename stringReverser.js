// Reverses the order of characters in a string. String are pssed via `bash` argv arguments.
// jshint esversion : 6
const reverser = function(v) {
  let out = "";
  for (let i = 1; i <= v.length; i++) {
    out += v[v.length - i];
  }

  return out;
};

process.argv.slice(2).forEach(v => {
  console.log(reverser(v));
});