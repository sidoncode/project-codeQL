// index.js
const http = require('http');

http.createServer(function (req, res) {
  const name = req.url.split('=')[1]; // 🚨 Possible input injection
  res.end(`Hello ${name}`);
}).listen(3000);
