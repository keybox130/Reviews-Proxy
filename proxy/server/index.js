const express = require('express');
const app = express();
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const port = 3000;

app.get('/', (req, res) => {
  res.redirect('stay/1');
});

app.use('/stay/:id', (req, res, next) => {
  const { id } = req.params;
  express.static(__dirname + '/../client/public/')(req, res, next);
});

// proxy to gallery api
app.use('/gallery/stays/:id', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
// proxy to review api
app.use('/reviews/stays/:id', createProxyMiddleware({ target: `http://localhost:3003`, changeOrigin: true }));
// proxy to review assets
app.use('/reviews-static', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));
// proxy to booking api
app.use('/booking/', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));
// proxy to more-places api
app.use('/more-places/', createProxyMiddleware({ target: 'http://localhost:3004', changeOrigin: true }));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});