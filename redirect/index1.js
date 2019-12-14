var http = require('http');

var server = http.createServer(function (req, res) {
  res.redirect('https://www.baidu.com/');
  res.end();
});

server.listen(3100)