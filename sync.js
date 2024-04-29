const fs = require("node:fs");

const readFile = fs.readFileSync("./textfile.txt", "utf-8");

console.log(`read file`,readFile);

console.log(`file read synchronously`);
