// Searches for keys in an object where its value matches a given value. Returns an array.
// jshint esversion : 6

const findKeyByValue = function(object, value) {
  let out = [];
  

  for (let key in object) {
    if (object[key] === value) {
      out.push(key);
    }
  }

  return out;
};
