const express = require('express');
const app = express();
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const port = 3000;

app.use(express.static(__dirname + '/../client/public/'));
app.use('/stays/:id', function (req, res, next) {
  console.log('Request Type:', req.method)
  next();
});

app.use('/stays/:id', createProxyMiddleware({target: 'http://localhost:3003', changeOrigin: true }));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});