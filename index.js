var lev = require('fast-levenshtein');

module.exports = listenshtein;

function listenshtein(word, list, max) {
  if(max == null) max = word.length - 1;
  var min = max, matches = 0, closest = null;
  for(var i = 0, l = list.length; i < l; i++) {
    var dist = lev.get(word, list[i]);
    if(dist > max) continue;
    // select random match if min dist has
    // already been reached
    if(dist === min) {
      matches++;
      if(closest === null || Math.random() * i < matches) {
        closest = list[i];
      }
    // replace current match, update min distance
    } else if(dist < min) {
      min = dist;
      matches = 1;
      closest = list[i];
    }
  }
  return closest;
}
