// jshint esversion : 6
const letterPositions = require('../letterPositions');
const assertArraysEqual = require('./eqArraysLogger');

const result1 = letterPositions("hello hehehe");
assertArraysEqual(result1.h, [ 0, 6, 8, 10 ]);
assertArraysEqual(result1.e, [ 1, 7, 9, 11 ]);
assertArraysEqual(result1.l, [ 2, 3 ]);
assertArraysEqual(result1.o, [ 4 ]);
assertArraysEqual(result1[' '], [ 5 ]);