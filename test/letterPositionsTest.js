// jshint esversion : 6
const letterPositions = require('../letterPositions');
const expect = require('chai').expect;

describe("#letterPositions", () => {
  const result1 = letterPositions("Hello hehehe");
  const result2 = letterPositions("~!@#$%^&*()_+|\\=-`{}[]\":;'<>?/.,");

  it("returns the correct position-arrays as an object", () => {
    expect(result1.e).to.eql([ 1, 7, 9, 11 ]);
    expect(result1.l).to.eql([ 2, 3 ]);
    expect(result1.o).to.eql([ 4 ]);
  });
  it("is case sensitive", () => {
    expect(result1.h).to.eql([ 6, 8, 10 ]);
    expect(result1.H).to.eql([ 0 ]);
  });
  it("returns 'undefined' for characters that don't exist in the string", () => {
    expect(result1.z).to.eql(undefined);
  });
  it("works with special character: white-space", () => {
    expect(result1[' ']).to.eql([5]);
  });
  it("works with special characters: ~!@#$%^&*()_+|\\=-`{}[]\":;'<>?/.,", () => {
    expect(result2['~']).to.eql([ 0 ]);
    expect(result2['!']).to.eql([ 1 ]);
    expect(result2['@']).to.eql([ 2 ]);
    expect(result2['#']).to.eql([ 3 ]);
    expect(result2.$).to.eql([ 4 ]);
    expect(result2['%']).to.eql([ 5 ]);
    expect(result2['^']).to.eql([ 6 ]);
    expect(result2['&']).to.eql([ 7 ]);
    expect(result2['*']).to.eql([ 8 ]);
    expect(result2['(']).to.eql([ 9 ]);
    expect(result2[')']).to.eql([ 10 ]);
    expect(result2._).to.eql([ 11 ]);
    expect(result2['+']).to.eql([ 12 ]);
    expect(result2['|']).to.eql([ 13 ]);
    expect(result2['\\']).to.eql([ 14 ]);
    expect(result2['=']).to.eql([ 15 ]);
    expect(result2['-']).to.eql([ 16 ]);
    expect(result2['`']).to.eql([ 17 ]);
    expect(result2['{']).to.eql([ 18 ]);
    expect(result2['}']).to.eql([ 19 ]);
    expect(result2['[']).to.eql([ 20 ]);
    expect(result2[']']).to.eql([ 21 ]);
    expect(result2['"']).to.eql([ 22 ]);
    expect(result2[':']).to.eql([ 23 ]);
    expect(result2[';']).to.eql([ 24 ]);
    expect(result2["'"]).to.eql([ 25 ]);
    expect(result2['<']).to.eql([ 26 ]);
    expect(result2['>']).to.eql([ 27 ]);
    expect(result2['?']).to.eql([ 28 ]);
    expect(result2['/']).to.eql([ 29 ]);
    expect(result2['.']).to.eql([ 30 ]);
    expect(result2[',']).to.eql([ 31 ]);
    
  });
});
