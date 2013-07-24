var assert = require('assert')
  , listenshtein = require('../');

var words = ['foo', 'barah', 'west', 'slimes'];
var tests = [
  ['boo', 'foo'],
  ['test', 'west'],
  ['tacos', 'barah'],
  ['tacos', 2, null],
  ['slime', 1, 'slimes'],
  ['sliaes', 1, 'slimes']
];

function test(word, max, match) {
  if(typeof match === 'undefined') {
    match = max;
    max = null;
  }
  var l = listenshtein(word, words, max);
  assert(l === match, l +" !== "+ match);
}

// positive
for(var i = 0; i < tests.length; i++) {
  test.apply(null, tests[i]);
}

// negative
assert.throws(function() {
  test('a', 1, 'foo');
});
