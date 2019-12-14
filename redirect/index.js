var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(301, {'Location': 'https://www.baidu.com/'});
  console.log(res._header);
  res.end();
});

server.listen(3100)