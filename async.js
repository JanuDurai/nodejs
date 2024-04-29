const fs = require("node:fs");

fs.readFile("./textfile.txt", "utf-8", (err, data) => {
  if (err) console.error(`Error: ${err}`);
  else console.log(`Read data ${data}`);
});

console.log(`file read synchronously`);
