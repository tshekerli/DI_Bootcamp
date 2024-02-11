
// const http = require("http");

// const server = http.createServer((request, response) => {
//   console.log("Hello from my first server");
//   console.log('url=>', request.url);
//   console.log('method=>', request.method);
//   console.log('method=>', request.headers);
//   response.end("<h1>Hi from my server</h1>");
// });

// server.listen(3001);




  const express = require('express')
  const app = express()
  
  app.listen(5000, () => {
      console.log('server is listening on port 5000')
  })

  const products = require('./config/db.js')
  app.get('/api/products', (req, res) => {
      res.json( products )
  });