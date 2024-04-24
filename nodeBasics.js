// import chalk from 'chalk';
// import { readLinesync } from 'node:fs';

function getSong() {
  let _song = "";
  let i = 5;
  for (i; i > 0; i -= 1) {
    _song += `${i} beers on the wall, you take one down and pass it around, ${
      i - 1
    } bottles of beer on the wall\n`;
    if (i === 1) {
      _song += "Hey let's get some more beer";
    }
  }

  return _song;
}

function singSong(_song) {
  if (!_song) throw new Error("song is '' empty, FEED ME A SONG!");
  console.log(_song);
}

const song = getSong();
// this will work
singSong(song);

console.log(`Node Basics`);

const { createServer } = require("node:http");

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("eg", "SampleHeader");
  res.end(`Request ended`);
});

server.listen(() => {
  console.log(`\nRequest resolved and response received `);
});

//blocking

// const fs = require('node:fs');
// const data = fs.readFileSync('');

// //unblocking

// fs.readFile('',(err,data)=>{
//     if(err) throw err;
//      else return data;
// })

const _ = require("lodash");
const { log } = require("node:console");

console.log(__dirname);
console.log(__filename);

// process.exit(0);

console.log(`environmental variable using cli`, process.env.NAME);

// node -e "console.log('Janu')"

require("dotenv").config();

console.log(`env variable using env file`, process.env.NAME);

console.log(`My name is %s and my age is %d`, "Janu", 21);

console.log("%o", 32);

// console.clear()

console.count("ajnu");

console.count(`janushreedurai`);
console.count(`janushreedurai`);
console.count(`janushreeduraisamy`);

const fruits = ["apple", "oranges", "oranges", "banana", "guava"];

console.log(`first count`);
fruits.forEach((fruit) => console.count(fruit));
console.log(`second count`);
fruits.forEach((fruit) => console.count(fruit));

console.countReset("oranges");

console.log(`Count Reset`);
fruits.forEach((fruit) => console.count(fruit));

// const chalk = require('chalk');

// console.log(chalk.magenta('hi!'));

// console.log(chalk.bgMagenta('hi!'));

// console.log(chalk.inverse('hi!'));

// console.log(chalk.strikethrough('hi!'));

// console.log(chalk.dim('hi!'));
// console.log(chalk.bold('hi!'));

// console.log(chalk.bold.bgYellow.magenta('Janu'));

// console.log(chalk.magenta.bgGreen.italic.underline('%s'),"Shree");

// const readLine = require('node:readline');

// const rL = readLine.createInterface({input:process.stdin, output:process.stdout});

// rL.question(`Please Enter your Name`,(name)=>{
//      console.log(`Hi ${name}!!!!!`);
//      rL.close();
// })

// const readLinesync = require('readline-sync');

// const rls = readLinesync.createInterface({
//       input:process.stdin,
//       output:process.stdout
// })

// rls.question(`Please enter the password`,(password)=>{
//     console.log(`Thank you`);
//     rls.close();
// });

// console.log("This program demonstrates "
// 			+ "stack trace in Node.js");
// var err = new Error().stack
// console.log(err);

// function2 = ()=> console.trace();

// function1=()=>function2();

// function1()

printFunction = () => console.log(`Print`);

callPrintFunction = () => {
  console.time("printFunction()");
  //   console.log(`Inside timer`);
  printFunction();
  console.timeEnd("printFunction()");
};

callPrintFunction();

const progressBar = require("progress");
const bar = new progressBar("bar", { total: 5 });
const timer = setInterval(() => {
  bar.tick();
  console.log(`s`);
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);

const personDetails = {
  name: "janu",
  age: 32,
};

module.exports.print = () => {
  console.log(`name:${personDetails.name}, age:${personDetails.age}`);
};

// const person = require('./personDetails');

function final(someInput, callback) {
  callback(`${someInput} and terminated by executing callback `);
}

function middleware(someInput, callback) {
  return final(`${someInput} touched by middleware `, callback);
}

function initiate() {
  const someInput = "hello this is a function ";
  middleware(someInput, function (result) {
    console.log(result);
    // requires callback to `return` result
  });
}

initiate();

let a = 5;
let array = new Array(10, 20);
console.log(array);

//   function getSong() {
//     let _song = '';
//     let i = 10;
//     for (i; i > 0; i -= 1) {
//       /* eslint-disable no-loop-func */
//       setTimeout(function () {
//         _song += `${i} beers on the wall, you take one down and pass it around, ${
//           i - 1
//         } bottles of beer on the wall\n`;
//         if (i === 1) {
//           _song += "Hey let's get some more beer";
//         }
//         console.log(`${_song}\n`);
//       }, 0);
//       /* eslint-enable no-loop-func */
//     }

//     return _song;
//   }

//   function singSong(_song) {
//     // if (!_song) throw new Error("song is '' empty, FEED ME A SONG!");
//     console.log(_song);
//   }

//   const song = getSong();
//   // this will not work
//   singSong(song);
//   // Uncaught Error: song is '' empty, FEED ME A SONG!

const eventEmitter = require("node:events");
const event = new eventEmitter();
// event.on('type',()=>{console.log(`type event is triggered`);})
// event.emit('type');

event.on("type", (start, end) => {
  console.log(`type event triggered from ${start} to ${end}`);
});
event.emit("type", 1, 100);

const http = require("http");

// const response = http.createServer((req,res)=>{
//     res.writeHead(200,{'myHeader':'name'});
//     res.write('Hello');
//     res.end('\nResponse Received')
// })

// response.listen(8081,()=>{console.log(`server is running`);})

// const htmlContent = `<h1>Displaying Response in html</h1>`;
// const httpreq=require('http');
// const httpres = httpreq.createServer((req,res)=>{
//      res.writeHead(200,{'Content-type':'text/html'});
//      res.write(htmlContent);
//      res.end();
// })

// httpres.listen(8000);

const fs = require("fs");

// http.createServer((req, res) => {
//   console.log(`Request received for ${req.url}`);
//   fs.readFile(__dirname + "/index.html", (err, data) => {
//     if (err) {
//       res.writeHead(404);
//       res.end(JSON.stringify(err));
//       return;
//     }
//     res.writeHead(200, { "Content-type": "text/html" });
//     res.end(data);
//   });
// }).listen(8500);

const httpRequestUrl = require("http");

httpRequestUrl
  .createServer((req, res) => {
    if (req.url == "/sample") {
      res.writeHead(200, { "Content-type": "text-plain" });
      res.write("<h1>Sample Data</h1>");
      res.end();
    } else {
      res.writeHead(200, { "Content-type": "text-plain" });
      res.write("<h1>Data</h1>");
      res.end();
    }
  })
  .listen(8091);

const express = require("express");
const app = express();
app.get("/user", (req, res) => {});
