'use strict';

const http = require('http');
const PORT = 30010;

const server = http.createServer((req,res)=>{
    let date = new Date();
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>node_docker_demo <h1>');
    res.write('<h3>今天天气不错</h3>');
    res.write('<h3>风和日丽的</h3>');
    res.end(`Hello Docker ,time:${date.toLocaleString()}`);
})

server.listen(PORT,()=>{
    console.log(`Running on http://localhost:${PORT}, NODE_ENV=${ process.env.NODE_ENV}`,);
});