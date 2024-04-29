console.log(`Node Basics`);

const http = require("node:http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("eg", "SampleHeader");
  res.end(`Request ended`);
});

// server.listen(8000, () => {
//   // console.log(`\nRequest resolved and response received `);
// });

console.log(__dirname);
console.log(__filename);

// process.exit(0);

//environment variables

const dotenv = require("dotenv");
dotenv.config();

console.log(`environmental variable using cli`, process.env.NAME);

// node -e "console.log('Janu')"

console.log(`My name is %s and my age is %d`, "Janu", 21);

console.log("%o", 32);

// console.clear()

console.count("ajnu");

console.count(`janushreedurai`);
console.count(`janushreedurai`);
console.count(`janushreeduraisamy`);

const fruits = ["apple", "oranges", "oranges", "banana", "guava"];

console.log(`--------first count----------`);
fruits.forEach((fruit) => console.count(fruit));

console.log(`------second count------------`);
fruits.forEach((fruit) => console.count(fruit));

console.countReset("oranges");

console.log(`--------Count Reset(oranges)---------`);
fruits.forEach((fruit) => console.count(fruit));

// const readLine = require('node:readline');

// const rL = readLine.createInterface({input:process.stdin, output:process.stdout});

// rL.question(`Please Enter your Name`,(name)=>{
//      console.log(`Hi ${name}!!!!!`);
//      rL.close();
// })

// const readLinesync = require('readline-sync');
// readLinesync.question(`Please enter the password`);
// console.log(`Thank you`);

console.log("stack trace in Node.js");

var err = new Error().stack;
console.log(`Stack trace error`, err);
console.trace();

printFunction = () => console.log(`Print`);

callPrintFunction = () => {
  console.time("printFunction()");
  // console.log(`Inside timer`);
  printFunction();
  console.timeEnd("printFunction()");
};

callPrintFunction();

const person = require("./personDetails");

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
  });
}

initiate();

let a = 5;
let array = new Array(10, 20);
console.log(array);

const eventEmitter = require("node:events");
const event = new eventEmitter();
event.on("type", () => {
  console.log(`type event is triggered`);
});
event.emit("type");

event.on("type", (start, end) => {
  console.log(`type event triggered from ${start} to ${end}`);
});
event.emit("type", 1, 100);

const htmlContent = `<h1>Displaying Response in html</h1>`;

const httpres = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  res.write(htmlContent);
  res.end();
});

httpres.listen(7000);

const fs = require("fs");

http
  .createServer((req, res) => {
    console.log(`Request received for ${req.url}`);
    fs.readFile(__dirname + "/index.html", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200, { "Content-type": "text/html" });
      res.end(data);
    });
  })
  .listen(8500);

http
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

const path = require("node:path");

fs.stat("./textfile.txt", (err, stat) => {
  if (err) console.error(`Error: ${err}`);
  console.log(stat.isFile());
  console.log(stat.isDirectory());
  console.log(stat.isSymbolicLink());
  console.log(stat.size);
  console.log(path.dirname("./textfile.txt"));
  console.log(path.basename("./textfile.txt"));
  console.log(path.extname("./textfile.txt"));
  console.log(path.resolve("./textfile.txt"));
});

fs.open("./textfile.txt", "r", (err, fd) => {
  if (err) {
    console.error(`Error`, err);
  }
  console.log(`File is opened`);
});

fs.readFile("./textfile.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(`Error: ${err}`);
  }
  console.log(`data - ${data}`);
});

const content = "Added - content";
fs.writeFile("./textfile.txt", content, (err) => {
  console.error(`Error in writing file: ${err}`);
});

const folderName = "newFolder";

if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName);
} else {
  console.error(`Folder already exist`);
}

fs.readdirSync(folderName);

fs
  .readdirSync(folderName)
  .map((file) => path.join(folderName, file));

console.log(`file full path`, folderName);

fs.renameSync(folderName,'renamedFolder',err=> console.log(`Error in renaming folder`));

// fs.rmdirSync(folderName, (err) => {
//   if (err) console.error(`Error in removing directory ${err}`);
// });

const os = require("node:os");

console.log(os.arch());
console.log(os.cpus());
console.log(os.endianness());
console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.loadavg());
console.log(os.networkInterfaces());
console.log(os.platform());
console.log(os.release());
console.log(os.tmpdir());
console.log(os.totalmem());
console.log(os.type());
console.log(os.uptime());

//queryparam

const queryurl = require("querystring");
console.log(`query string`, queryurl.parse("name=sonoo&company=javatpoint"));

//buffer

const buffer = require('buffer');
let word = Buffer.alloc(4);
word.write("janushree");


console.log(`buffered word`, word);
console.log(`buffered word`, word.toString());

word = Buffer.from("Hello ");
console.log(`buffered word`, word);
console.log(`buffered word`, word.toString());


const slicedWord = word.slice(0, 2);

console.log(`sliced word ${slicedWord.toString()}`);

const word2 = Buffer.from("World!!!");

console.log(Buffer.concat([word, word2]).toString());

//stream

const readStream = fs.createReadStream("textfile.txt");

readStream.on("data", (data) => {
  console.log(`Size: ${data.length}`);
});

readStream.on("end", () => {
  console.log(`Read Stream Finished`);
});

readStream.on("error", (err) => {
  console.log(`Error : ${err}`);
});


// cluster

// const express = require("express");
// const cluster = require("cluster");

// const noofcpu = os.cpus().length;
// console.log(`cpu core`,noofcpu);

// if (cluster.isMaster) {
//   console.log(`Master process ${process.pid} is running`);
//   for (let i = 0; i < noofcpu; i++) {
//     cluster.fork();
//   }
// }

// cluster.on('exit',(worker,code,signal)=>{
//     console.log(`Server ended`);
//     cluster.fork();

// })




//crypto

const crypto = require('crypto');
const password='abcdefg';
const hash = crypto.createHmac('sha256',password).update('Hello').digest('hex');

console.log(`crypted password: ${hash}`);

process.nextTick(()=>{
  console.log(`Executed in next iteration`);
})

console.log(`Executed in current iteration`);

const zlib= require('zlib');
const createdZip = zlib.createGzip();
const input = fs.createReadStream('textfile.txt');
const output = fs.createWriteStream('textfile.txt.gz')
input.pipe(createdZip).pipe(output);

console.log("log");
console.info("Information");
console.warn("Warning message");
console.trace("a stack trace");
