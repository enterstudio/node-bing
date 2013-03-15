# node-bing

A simple client wrapper for Microsoft's Bing Search API v2.2 on Node.js.

# Installation

```
$ git clone git://github.com/thinkphp/node-bing.git
$ npm install node-bing
```

Touch app.js and add:

```
var bing = require('binger')

var b = bing({appId:"your-api-key"})

b.search("MooTools", function(error, response, body){

     console.log(body.SearchResponse.Web.Results[0]) 

},{limit: 30})
```

Run the app

```
$ node app.js
```

# License

MIT