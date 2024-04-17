console.log(`Node Basics`);

const {createServer} = require('node:http');

const server = createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('eg','SampleHeader');
    res.end(`Request ended`);
})

server.listen(()=>{
     console.log(`Request resolved and response received `);
})

//blocking

// const fs = require('node:fs');
// const data = fs.readFileSync('');


// //unblocking

// fs.readFile('',(err,data)=>{
//     if(err) throw err; 
//      else return data;
// })


const _ = require('lodash');

const http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/plain'})
    res.end('Response Received')
}).listen(8081);

