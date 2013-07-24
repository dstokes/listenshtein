listenshtein
======

Filter a list based on Levenshtein distances

[![Build Status](https://travis-ci.org/dstokes/listenshtein.png)](https://travis-ci.org/dstokes/listenshtein)  
[![NPM](https://nodei.co/npm/listenshtein.png?downloads=true)](https://nodei.co/npm/listenshtein/)

Example
=======
``` js
var fs = require('fs')
  , listenshtein = require('listenshtein');
  
fs.readFile(somefile, function(err, data) {
  var words = data.split(' ');
  
  console.log(
    listenshtein('tako', words, 1);
  ); // => 'taco'
});
```

listenshtein(word, words, [max dist])
=====================================
* `max dist` the maximum levenshtein distance to allow (defaults to `word.length - 1`)

install
=======

With [npm](http://npmjs.org) do:

```
npm install listenshtein
```
