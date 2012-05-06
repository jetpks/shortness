# NAME

shortness

# EXAMPLE

```javascript
var shortness = require('shortness')
  ;

// Adding!
shortness.add('http://some-long-address.tld/with/some/more/longness', function(shortId) {
  console.log('new url: http://short.tld/' + shortId);
});

// Retreiving!
shortness.get('t8j30vns', function(targetUrl) {
  console.log('real url: ', targetURL);
});
```

# NOTES

This is really just a very thin wrapper around sqlite3. It doesn't do any
validation, and it doesn't respond via HTTP. It is, however, a nice module
for a web service that needs to do url shortening.

You will need to do your own HTTP stuff around this module. Really, it's just
a glorified key value store.
