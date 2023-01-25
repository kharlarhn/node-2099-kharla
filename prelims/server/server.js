var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write('<html><body><p>This is Home Page.</p></body></html>');
    res.end();
  } else if (req.url == '/student') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>This is Student Page.</p></body></html>');
    res.end();
  } else if (req.url == '/admin') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>This is Student Page.</p></body></html>');
    res.end();
  } else res.end('Invalid Request');
});

server.listen(5000);
console.log('Node.js Web Server at Port 5000 is running...');
