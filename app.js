var bing = require('binger')

var b = bing({appId:"49EB4B94127F7C7836C96DEB3F2CD8A6D12BDB71"})

b.search("MooTools", function(error, response, body){

     console.log(body.SearchResponse.Web.Results[0]) 

},{limit: 20})
