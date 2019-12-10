'use strict';

const http = require('http');
const PORT = 30010;

const server = http.createServer((req,res)=>{
  let date = new Date();
   res.end(`Hello Docker ,time:${date.toLocaleString()}`);
})

server.listen(PORT,()=>{
    console.log(`Running on http://localhost:${PORT}, NODE_ENV=${ process.env.NODE_ENV}`,);
});