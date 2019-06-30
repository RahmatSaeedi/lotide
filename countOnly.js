// returns an object containing counts of everything that the input object listed
// jshint esversion : 6
const assertEqual = require('./assertEqual');

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

countOnly.assertFunctionality = function() {
  // Should pass all cases
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["Fang"], 2);
};

module.exports = countOnly;