# NAME

shortness

# EXAMPLE

```javascript
var shortness = require('shortness')
  ;

// Adding!
shortness.add('http://some-long-address.tld/with/some/more/longness', function(shortId) {
  console.log('new url: http://short.tld/' + shortId);
  // output: "new url: http://short.tld/t8j30vns"
});

// Retreiving!
shortness.get('t8j30vns', function(targetUrl) {
  console.log('real url: ', targetURL);
  // output: "real url: http://some-long-address.tld/with/some/more/longness"
});
```

# NOTES

This is really just a very thin wrapper around sqlite3. It doesn't do any
validation. You will need to do your own HTTP (or whatever protocol suits your
fancy) stuff around this module. Really, it's just a glorified key value store.
